export default function ExtractingMoneyIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16Zm-.71-6.29a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21L15,7.46A1,1,0,1,0,13.54,6L13,6.59V3a1,1,0,0,0-2,0V6.59L10.46,6A1,1,0,0,0,9,7.46ZM19,15a1,1,0,1,0-1,1A1,1,0,0,0,19,15Zm1-7H17a1,1,0,0,0,0,2h3a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H7A1,1,0,0,0,7,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V11A3,3,0,0,0,20,8ZM5,15a1,1,0,1,0,1-1A1,1,0,0,0,5,15Z" fill="currentColor"/>
        </svg>
    )
}

export const withdrawalsIcon = ExtractingMoneyIcon