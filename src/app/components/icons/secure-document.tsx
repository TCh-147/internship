export default function SecureDocumentIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='2px'>
            <title/>
            <g data-name="348-Document Security" id="_348-Document_Security">
                <polygon points="10 1 4 7 4 31 28 31 28 1 10 1"/>
                <polyline points="10 1 10 7 4 7"/>
                <rect height="8" width="10" x="11" y="17"/>
                <path d="M13,17V13a1,1,0,0,1,1-1h2"/>
                <path d="M19,13a1,1,0,0,0-1-1H16"/>
            </g>
        </svg>
    )
}

export const secureDocumentIcon = SecureDocumentIcon