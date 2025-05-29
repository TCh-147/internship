export default function PlusIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}>
            <title/>
            <g id="plus">
                <line x1="16" x2="16" y1="7" y2="25"/>
                <line x1="7" x2="25" y1="16" y2="16"/>
            </g>
        </svg>
    )
}