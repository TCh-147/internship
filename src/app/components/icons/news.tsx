export default function NewsIcon(props: React.SVGProps<SVGSVGElement>){
    return(
        <svg {...props} enableBackground="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <g id="background">
                <rect fill="none" height="32" width="32"/>
            </g>
            <g id="news_1_">
                <path fill="currentColor" d="M4,14h20v-2H4V14z M15,26h7v-2h-7V26z M15,22h9v-2h-9V22z M15,18h9v-2h-9V18z M4,26h9V16H4V26z M28,10V6H0v22c0,0,0,4,4,4   h25c0,0,3-0.062,3-4V10H28z M4,30c-2,0-2-2-2-2V8h24v20c0,0.921,0.284,1.558,0.676,2H4z"/>
            </g>
        </svg>
    )
}

export const newsIcon = NewsIcon