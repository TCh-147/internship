export default function DocumentIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='2px'>
            <title/>
            <g data-name="326-Document" id="_326-Document">
                <polygon points="10 1 4 7 4 31 28 31 28 1 10 1"/>
                <polyline points="10 1 10 7 4 7"/>
                <line x1="14" x2="24" y1="15" y2="15"/>
                <line x1="8" x2="24" y1="20" y2="20"/>
                <line x1="14" x2="24" y1="25" y2="25"/>
            </g>
        </svg>
    )
}

export const documentIcon = DocumentIcon