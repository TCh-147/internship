export default function MoneySafeIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} enableBackground="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                <path fill="currentColor" d="M23,0H1C0.4,0,0,0.4,0,1v22c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V1C24,0.4,23.6,0,23,0z M2,7h1v10H2V7z M22,22H2v-3h1v2h18   V3H3v2H2V2h20V22z M4,20V4h16v16H4z"/>
                <path fill="currentColor" d="M15,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S16.7,9,15,9z M15,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S16.1,14,15,14z"/>
            </g>
        </svg>
    )
}

export const depositIcon = MoneySafeIcon