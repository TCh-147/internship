export default function PaymentIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Layer_1"/>
                <g id="Layer_2">
                    <g>
                        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="10" y2="12"/>
                        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="20" y2="22"/>
                        <path d="    M14,20h3c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="    M16,6c5.5,0,10,4.5,10,10s-4.5,10-10,10S6,21.5,6,16v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <polyline fill="none" points="    10,17 6,13 2,17   " stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                        <path d="    M16,2c7.7,0,14,6.3,14,14s-6.3,14-14,14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    </g>
                </g>
        </svg>
    )
}

export const paymentIcon = PaymentIcon