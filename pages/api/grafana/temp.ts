import {NextApiRequest, NextApiResponse} from 'next'
import {getTemp} from '@/lib/grafana'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await getTemp()

    return res.status(200).json(response)
}