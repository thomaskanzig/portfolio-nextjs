import {services} from '@/data/services-data';

export async function GET() {
    return new Response(
        JSON.stringify(services),
        {
            headers: {
                'content-type': 'application/json'
            },
            status: 200
        }
    );
}