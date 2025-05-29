export default function TextIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="256" width="256"/>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="40" x2="216" y1="68" y2="68"/>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="40" x2="168" y1="108" y2="108"/>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="40" x2="216" y1="148" y2="148"/>
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="40" x2="168" y1="188" y2="188"/>
        </svg>
    )
}

export const textIcon = TextIcon