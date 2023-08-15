import { IProcuctData } from '@/interfaces/interfaces'

export async function getData():Promise<IProcuctData[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/products`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}