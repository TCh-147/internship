export default function UtilitiesIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} height="20" version="1.1" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <g id="layer1">
                <path d="M 0 5 L 0 14 L 18 14 L 18 5 L 0 5 z M 1 6 L 17 6 L 17 13 L 1 13 L 1 6 z M 12 7 L 12 8 L 16 8 L 16 7 L 12 7 z M 19 7 L 19 15 L 2 15 L 2 16 L 20 16 L 20 7 L 19 7 z M 2 8 L 2 9 L 10 9 L 10 8 L 2 8 z M 2 10 L 2 11 L 7 11 L 7 10 L 2 10 z M 13 11 L 13 12 L 16 12 L 16 11 L 13 11 z " fill="currentColor"  fillOpacity='1' stroke='none' strokeWidth='0px'/>
            </g>
        </svg>
    )
}

export const utilitiesIcon = UtilitiesIcon