'use server'

import { signIn } from '@/auth'
import { User } from '@/lib/types'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import { kv } from '@vercel/kv'
import { ResultCode } from '@/lib/utils'
import { API_BASE_URL } from '@/config'

export async function getUser(email: string) {
  const user = await kv.hgetall<User>(`user:${email}`)
  return user
}

interface Result {
  type: string
  resultCode: ResultCode,
  repoNames?: string[]
}

export async function authenticate(
  _prevState: Result | undefined,
  formData: FormData
): Promise<Result | undefined> {
  try {
    const email = formData.get('email')
    const password = formData.get('password')

    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string().min(6)
      })
      .safeParse({
        email,
        password
      })

    if (parsedCredentials.success) {
      await signIn('credentials', {
        email,
        password,
        redirect: false
      })
      console.log('before API call')
      
      // Construct the URL with query parameters
      const url = new URL(`${API_BASE_URL}/user`)
      url.searchParams.append('email', email as string)

      // Await the fetch call to the API endpoint
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to call API endpoint oh noooooo :(((((')
      }

      const data = await response.json()
      const repoNames = data.repoNames || []
      console.log(' Fetched Repo Names:', repoNames)

      return {
        type: 'success',
        resultCode: ResultCode.UserLoggedIn,
        repoNames : repoNames
      }
    } else {
      return {
        type: 'error',
        resultCode: ResultCode.InvalidCredentials
      }
    }
  } catch (error) {
    console.error('Error in authenticate function:', error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            type: 'error',
            resultCode: ResultCode.InvalidCredentials
          }
        default:
          return {
            type: 'error',
            resultCode: ResultCode.UnknownError
          }
      }
    } else {
      return {
        type: 'error',
        resultCode: ResultCode.UnknownError
      }
    }
  }
}
