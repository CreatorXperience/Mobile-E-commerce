import React, { ReactElement } from 'react'
import "../../style.css"

type forSvg = {
close(): ReactElement,
arrow():ReactElement,
shoppingBag(): ReactElement,
darkShoppingBag(): ReactElement,
cart(): ReactElement,
edit(): ReactElement,
recycleBin(): ReactElement,
recycleBinLight(): ReactElement
add(): ReactElement,
search(): ReactElement,
home():ReactElement,
save(): ReactElement,
notification(): ReactElement,
user(): ReactElement,
back(): ReactElement,
visible(): ReactElement,
forward(): ReactElement,
forwardLight(): ReactElement
dropdown(): ReactElement,
time(): ReactElement,
darkbag():ReactElement
}

// TODO add className = 'fill-gray-900' on different route

const Svg:forSvg = {
    close(){
        return (
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>  console.log('i am clicked') }>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.7436 10.9121L14.2766 8.37915C14.577 8.07875 15.064 8.07875 15.3644 8.37915C15.6648 8.67955 15.6648 9.1666 15.3644 9.46701L12.8314 12L15.3645 14.533C15.6649 14.8334 15.6649 15.3205 15.3645 15.6209C15.0641 15.9213 14.577 15.9213 14.2766 15.6209L11.7436 13.0879L9.21059 15.6209C8.91019 15.9213 8.42314 15.9213 8.12274 15.6209C7.82233 15.3204 7.82233 14.8334 8.12274 14.533L10.6557 12L8.12276 9.46703C7.82236 9.16663 7.82236 8.67958 8.12276 8.37917C8.42317 8.07877 8.91022 8.07877 9.21062 8.37917L11.7436 10.9121ZM3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12Z" fill="#242424"/>
            </svg>
        )
    },

    arrow(){
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.45597C4.42197 2.77148 2.77197 4.42148 2.77197 6.45648V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.8096 12.0214H9.76855" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.8813 9.10626L21.8093 12.0213L18.8813 14.9373" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        )
    },
     shoppingBag(){
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="4" fill="#606060" fill-opacity="0.4"/>
            <path d="M22.9687 21.3106L21.6667 9.06063C21.6667 8.29047 21.07 7.66669 20.3333 7.66669H15H9.66667C8.93 7.66669 8.33333 8.29047 8.33333 9.06063L7.03133 21.3106C7.012 21.406 7 21.5043 7 21.6061C7 22.3762 7.59667 23 8.33333 23H15H21.6667C22.4033 23 23 22.3762 23 21.6061C23 21.5043 22.988 21.406 22.9687 21.3106ZM18.3333 11.0874V11.8485C18.3333 13.7701 16.838 15.3334 15 15.3334C13.162 15.3334 11.6667 13.7701 11.6667 11.8485V11.0874C11.2793 10.9438 11 10.5605 11 10.1061C11 9.52899 11.448 9.06063 12 9.06063C12.552 9.06063 13 9.52899 13 10.1061V11.8485C13 13.0013 13.8973 13.9394 15 13.9394C16.1027 13.9394 17 13.0013 17 11.8485V10.1061C17 9.52899 17.448 9.06063 18 9.06063C18.552 9.06063 19 9.52899 19 10.1061C19 10.5605 18.7207 10.9438 18.3333 11.0874Z" fill="white"/>
            </svg>
        )
     },

    darkShoppingBag(){
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9687 16.3106L16.6667 4.06063C16.6667 3.29047 16.07 2.66669 15.3333 2.66669H10H4.66667C3.93 2.66669 3.33333 3.29047 3.33333 4.06063L2.03133 16.3106C2.012 16.406 2 16.5043 2 16.6061C2 17.3762 2.59667 18 3.33333 18H10H16.6667C17.4033 18 18 17.3762 18 16.6061C18 16.5043 17.988 16.406 17.9687 16.3106ZM13.3333 6.08741V6.8485C13.3333 8.77005 11.838 10.3334 10 10.3334C8.162 10.3334 6.66667 8.77005 6.66667 6.8485V6.08741C6.27933 5.94384 6 5.5605 6 5.10608C6 4.52899 6.448 4.06063 7 4.06063C7.552 4.06063 8 4.52899 8 5.10608V6.8485C8 8.00129 8.89733 8.93941 10 8.93941C11.1027 8.93941 12 8.00129 12 6.8485V5.10608C12 4.52899 12.448 4.06063 13 4.06063C13.552 4.06063 14 4.52899 14 5.10608C14 5.5605 13.7207 5.94384 13.3333 6.08741Z" fill="#303030"/>
</svg>

        )
     },

     cart(){
        return(
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2.60693 4.64286C2.60693 4.47236 2.67466 4.30885 2.79522 4.18829C2.91578 4.06773 3.07929 4 3.24979 4H5.17836C5.32176 4.00004 5.46103 4.04802 5.57402 4.13632C5.68701 4.22461 5.76723 4.34815 5.80193 4.48729L6.32265 6.57143H21.2498C21.3474 6.57146 21.4438 6.59373 21.5316 6.63655C21.6193 6.67938 21.6962 6.74164 21.7563 6.81859C21.8164 6.89555 21.8581 6.98519 21.8784 7.08071C21.8987 7.17623 21.897 7.27511 21.8734 7.36986L19.9448 15.0841C19.9101 15.2233 19.8299 15.3468 19.7169 15.4351C19.6039 15.5234 19.4646 15.5714 19.3212 15.5714H7.74979C7.60639 15.5714 7.46713 15.5234 7.35414 15.4351C7.24115 15.3468 7.16092 15.2233 7.12622 15.0841L4.67693 5.28571H3.24979C3.07929 5.28571 2.91578 5.21798 2.79522 5.09743C2.67466 4.97687 2.60693 4.81335 2.60693 4.64286ZM6.64408 7.85714L8.25122 14.2857H18.8198L20.4269 7.85714H6.64408ZM9.0355 18.1429C8.69451 18.1429 8.36749 18.2783 8.12637 18.5194C7.88525 18.7606 7.74979 19.0876 7.74979 19.4286C7.74979 19.7696 7.88525 20.0966 8.12637 20.3377C8.36749 20.5788 8.69451 20.7143 9.0355 20.7143C9.3765 20.7143 9.70352 20.5788 9.94464 20.3377C10.1858 20.0966 10.3212 19.7696 10.3212 19.4286C10.3212 19.0876 10.1858 18.7606 9.94464 18.5194C9.70352 18.2783 9.3765 18.1429 9.0355 18.1429ZM6.46408 19.4286C6.46408 18.7466 6.73499 18.0925 7.21723 17.6103C7.69947 17.1281 8.35352 16.8571 9.0355 16.8571C9.71749 16.8571 10.3715 17.1281 10.8538 17.6103C11.336 18.0925 11.6069 18.7466 11.6069 19.4286C11.6069 20.1106 11.336 20.7646 10.8538 21.2468C10.3715 21.7291 9.71749 22 9.0355 22C8.35352 22 7.69947 21.7291 7.21723 21.2468C6.73499 20.7646 6.46408 20.1106 6.46408 19.4286ZM18.0355 18.1429C17.6945 18.1429 17.3675 18.2783 17.1264 18.5194C16.8852 18.7606 16.7498 19.0876 16.7498 19.4286C16.7498 19.7696 16.8852 20.0966 17.1264 20.3377C17.3675 20.5788 17.6945 20.7143 18.0355 20.7143C18.3765 20.7143 18.7035 20.5788 18.9446 20.3377C19.1858 20.0966 19.3212 19.7696 19.3212 19.4286C19.3212 19.0876 19.1858 18.7606 18.9446 18.5194C18.7035 18.2783 18.3765 18.1429 18.0355 18.1429ZM15.4641 19.4286C15.4641 18.7466 15.735 18.0925 16.2172 17.6103C16.6995 17.1281 17.3535 16.8571 18.0355 16.8571C18.7175 16.8571 19.3715 17.1281 19.8538 17.6103C20.336 18.0925 20.6069 18.7466 20.6069 19.4286C20.6069 20.1106 20.336 20.7646 19.8538 21.2468C19.3715 21.7291 18.7175 22 18.0355 22C17.3535 22 16.6995 21.7291 16.2172 21.2468C15.735 20.7646 15.4641 20.1106 15.4641 19.4286Z" fill="#242424"/>
</svg>

        )
     },

     edit(){
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="edit-2">
<path id="&#240;&#159;&#142;&#168; Icon &#208;&#161;olor" fillRule="evenodd" clipRule="evenodd" d="M4.29251 17.6855C4.08251 17.4755 3.97751 17.1835 4.00351 16.8875L4.38251 12.7175C4.42451 12.2605 4.62651 11.8295 4.95251 11.5035L13.9485 2.50752C14.6505 1.80252 15.9235 1.83752 16.6645 2.57652L19.4025 5.31452L19.4035 5.31552C20.1685 6.08152 20.1995 7.29952 19.4715 8.02952L10.4745 17.0265C10.1495 17.3515 9.71851 17.5535 9.26051 17.5955L5.09051 17.9745C5.06051 17.9765 5.03051 17.9775 4.99951 17.9775C4.73651 17.9775 4.48151 17.8735 4.29251 17.6855ZM16.0185 8.65652L13.3235 5.96152L15.2715 4.01252L17.9655 6.70652L16.0185 8.65652ZM9.07951 15.6025L6.10251 15.8735L6.36651 12.9175L11.9835 7.30052L14.6795 9.99752L9.07951 15.6025ZM18.9995 21.9775C19.5495 21.9775 19.9995 21.5275 19.9995 20.9775C19.9995 20.4285 19.5495 19.9775 18.9995 19.9775H4.99951C4.45051 19.9775 3.99951 20.4285 3.99951 20.9775C3.99951 21.5275 4.45051 21.9775 4.99951 21.9775H18.9995Z" fill="#242424"/>
</g>
</svg>

        )
     },

     recycleBin(){
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H5H21" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        )
     },
     recycleBinLight() {
         return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

         )
     },

     add(){
return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="plus">
<path id="&#240;&#159;&#142;&#168; Icon &#208;&#161;olor" d="M19 11.5H13V5.5C13 4.947 12.552 4.5 12 4.5C11.448 4.5 11 4.947 11 5.5V11.5H5C4.448 11.5 4 11.947 4 12.5C4 13.053 4.448 13.5 5 13.5H11V19.5C11 20.053 11.448 20.5 12 20.5C12.552 20.5 13 20.053 13 19.5V13.5H19C19.552 13.5 20 13.053 20 12.5C20 11.947 19.552 11.5 19 11.5" fill="#242424"/>
<mask id="mask0_313_659" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="17">
<path id="&#240;&#159;&#142;&#168; Icon &#208;&#161;olor_2" d="M19 11.5H13V5.5C13 4.947 12.552 4.5 12 4.5C11.448 4.5 11 4.947 11 5.5V11.5H5C4.448 11.5 4 11.947 4 12.5C4 13.053 4.448 13.5 5 13.5H11V19.5C11 20.053 11.448 20.5 12 20.5C12.552 20.5 13 20.053 13 19.5V13.5H19C19.552 13.5 20 13.053 20 12.5C20 11.947 19.552 11.5 19 11.5" fill="white"/>
</mask>
<g mask="url(#mask0_313_659)">
</g>
</g>
</svg>

)
     },
search(){
   return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="#242424"/>
</svg>
   ) 
},

home(){
    return(
        <svg className = '' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.6667C21.9123 12.6672 21.8253 12.6504 21.7441 12.6172C21.6629 12.584 21.589 12.5351 21.5267 12.4733L12 2.94001L2.47335 12.4733C2.34582 12.5826 2.18177 12.6396 2.01398 12.6331C1.8462 12.6267 1.68704 12.5571 1.56831 12.4384C1.44958 12.3197 1.38002 12.1605 1.37354 11.9927C1.36706 11.8249 1.42413 11.6609 1.53335 11.5333L11.5334 1.53334C11.6583 1.40917 11.8272 1.33948 12.0034 1.33948C12.1795 1.33948 12.3484 1.40917 12.4733 1.53334L22.4733 11.5333C22.5651 11.6269 22.6272 11.7455 22.6519 11.8742C22.6767 12.0029 22.6629 12.136 22.6124 12.2569C22.5619 12.3779 22.4769 12.4812 22.368 12.5541C22.2591 12.627 22.1311 12.6661 22 12.6667Z" fill="#999999"/>
<path d="M10 15.25H9.25V16V21.9166H5.33333C5.17862 21.9166 5.03025 21.8552 4.92086 21.7458C4.81146 21.6364 4.75 21.488 4.75 21.3333V13.5299L12.0015 6.25418L19.25 13.4845V21.3333C19.25 21.488 19.1885 21.6364 19.0791 21.7458C18.9698 21.8552 18.8214 21.9166 18.6667 21.9166H14.75V16V15.25H14H10Z" stroke="#999999" strokeWidth="1.5"/>
</svg>

    )
},
save(){
   return(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M4.9972 21.2499H4.99696C4.91804 21.2499 4.86597 21.2156 4.84061 21.1813C4.79355 21.1175 4.75 21.0185 4.75 20.8638V3.69774C4.75 3.2668 5.21468 2.75 5.8818 2.75H18.1849C18.8157 2.75 19.25 3.23343 19.25 3.69774V20.8639C19.25 21.1034 19.1815 21.1879 19.1626 21.2076C19.1408 21.2303 19.1058 21.25 19.0466 21.25C18.9832 21.25 18.8607 21.2254 18.6658 21.0684L18.6651 21.0679L13.1799 16.6616C12.8548 16.3997 12.4369 16.2799 12.0414 16.2799C11.6469 16.2799 11.2286 16.3991 10.9037 16.6605C10.9034 16.6607 10.9031 16.661 10.9028 16.6612L5.40009 21.0679L5.39836 21.0693C5.21683 21.2155 5.0733 21.2499 4.9972 21.2499Z" stroke="#999999" strokeWidth="1.5"/>
   </svg>) 

},

notification(){
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
},
user(){
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.5 21C19.5 21 21 21 21 19.5C21 18 19.5 13.5 12 13.5C4.5 13.5 3 18 3 19.5C3 21 4.5 21 4.5 21H19.5ZM4.5075 19.584V19.581V19.584ZM4.533 19.5H19.467C19.474 19.4992 19.481 19.4982 19.488 19.497L19.5 19.494C19.4985 19.125 19.269 18.015 18.252 16.998C17.274 16.02 15.4335 15 12 15C8.565 15 6.726 16.02 5.748 16.998C4.731 18.015 4.503 19.125 4.5 19.494C4.51098 19.4961 4.52198 19.4981 4.533 19.5ZM19.494 19.584V19.581V19.584ZM12 10.5C12.7956 10.5 13.5587 10.1839 14.1213 9.62132C14.6839 9.05871 15 8.29565 15 7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7956 4.5 12 4.5C11.2044 4.5 10.4413 4.81607 9.87868 5.37868C9.31607 5.94129 9 6.70435 9 7.5C9 8.29565 9.31607 9.05871 9.87868 9.62132C10.4413 10.1839 11.2044 10.5 12 10.5ZM16.5 7.5C16.5 8.69347 16.0259 9.83807 15.182 10.682C14.3381 11.5259 13.1935 12 12 12C10.8065 12 9.66193 11.5259 8.81802 10.682C7.97411 9.83807 7.5 8.69347 7.5 7.5C7.5 6.30653 7.97411 5.16193 8.81802 4.31802C9.66193 3.47411 10.8065 3 12 3C13.1935 3 14.3381 3.47411 15.182 4.31802C16.0259 5.16193 16.5 6.30653 16.5 7.5Z" fill="#999999"/>
</svg>

    )
},
back(){
    return(
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.25 4L6.75 10.5L13.25 17" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
},
visible(){
    return (
        <svg width="20" height="20"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.5C2 9.5 4.90909 4 10 4C15.0909 4 18 9.5 18 9.5C18 9.5 15.0909 15 10 15C4.90909 15 2 9.5 2 9.5Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12C11.1046 12 12 10.8807 12 9.5C12 8.11929 11.1046 7 10 7C8.89543 7 8 8.11929 8 9.5C8 10.8807 8.89543 12 10 12Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
},
forward(){
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
},
dropdown(){
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_313_739)">
<path d="M6.175 7.65833L10 11.475L13.825 7.65833L15 8.83333L10 13.8333L5 8.83333L6.175 7.65833Z" fill="#242424"/>
</g>
<defs>
<clipPath id="clip0_313_739">
<rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

    )
},
forwardLight() {
    return(
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.999998 17L9 9L0.999997 0.999997" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
},
time(){
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_313_1384)">
<path d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5V10L13.3333 11.6667" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_313_1384">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    )
},
darkbag(){
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="8" fill="#F0F0F0"/>
<path d="M22.9972 39.2499H22.997C22.918 39.2499 22.866 39.2156 22.8406 39.1813C22.7935 39.1175 22.75 39.0185 22.75 38.8638V21.6977C22.75 21.2668 23.2147 20.75 23.8818 20.75H36.1849C36.8157 20.75 37.25 21.2334 37.25 21.6977V38.8639C37.25 39.1034 37.1815 39.1879 37.1626 39.2076C37.1408 39.2303 37.1058 39.25 37.0466 39.25C36.9832 39.25 36.8607 39.2254 36.6658 39.0684L36.6651 39.0679L31.1799 34.6616C30.8548 34.3997 30.4369 34.2799 30.0414 34.2799C29.6469 34.2799 29.2286 34.3991 28.9037 34.6605C28.9034 34.6607 28.9031 34.661 28.9028 34.6612L23.4001 39.0679L23.3984 39.0693C23.2168 39.2155 23.0733 39.2499 22.9972 39.2499Z" stroke="#242424" strokeWidth="1.5"/>
</svg>

    )
}
}
export default Svg