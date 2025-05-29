export default function ATMIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} fill='none' stroke='#000' strokeLinejoin='round' strokeMiterlimit='10' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 32 32" enableBackground='new 0 0 32 32' xmlSpace="preserve">
            <path d="M30.7,2v6.7c0,0.6-0.4,1-1,1h-2.6V5.4H5v4.4H2.3c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h27.5  C30.3,1,30.7,1.4,30.7,2z"/>
            <line fill="currentColor" x1="8.4" y1="8.3" x2="8.4" y2="10.5"/>
            <line fill="currentColor" x1="8.4" y1="14.2" x2="8.4" y2="16.3"/>
            <line fill="currentColor" x1="8.4" y1="20" x2="8.4" y2="22.2"/>
            <line fill="currentColor" x1="8.4" y1="25.9" x2="8.4" y2="28"/>
            <rect x="11.4" y="5.4" width="3.6" height="25.6"/>
            <path d="M27.1,5.4v23.8c0,1-0.8,1.8-1.8,1.8H6.8c-1,0-1.8-0.8-1.8-1.8V5.4H27.1z"/>
            <line fill="currentColor" x1="3.4" y1="5.4" x2="28.6" y2="5.4"/>
            <circle cx="20.9" cy="25.3" r="2.8"/>
            <path d="M23.7,22.3c0,0.6-0.2,1.1-0.5,1.5c-0.5-0.8-1.3-1.2-2.3-1.2c-1,0-1.8,0.5-2.3,1.2c-0.3-0.4-0.5-0.9-0.5-1.5  c0-1.5,1.2-2.8,2.8-2.8C22.4,19.6,23.7,20.8,23.7,22.3z"/>
        </svg>
    )
}

export const atmIcon = ATMIcon