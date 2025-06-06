export default function QuestionMarkIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} fill="none" stroke="currentColor" height="24" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18.01L12.01 17.9989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const questionMarkIcon = QuestionMarkIcon