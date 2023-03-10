import {ref} from 'vue'
import buttonicon from '@/images/buttonicon.svg';
import hovButtonIcon from '@/images/hovButtonIcon.svg';

 export const menuList = ref([
    {
     
      label: 'Basic Component',
      listOfSubCom:[
                   {
                    "name":"Button",
                     "path":"/button",
                     "desc":"This is button component This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"Avatar",
                     "path":"/avatar",
                     "desc":"This is avatar component This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                    },
                    {
                        "name":"Badge",
                         "path":"/Badge",
                         "desc":"This is Badge component This is button component",
                         "logoSrc":buttonicon,
                         "hovLogo":hovButtonIcon
                        }
                  ],
      separator: true
    },
    {
     
      label: 'Form Component',
      listOfSubCom:[
                   {
                    "name":"button",
                     "path":"/button",
                     "desc":"This is button component This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"button",
                     "path":"/button",
                     "desc":"This is button component This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                    }
                  ],
      separator: false
    },
    {
      
      label: 'Utility Component',
      listOfSubCom:[
                   {
                    "name":"button",
                     "path":"/button",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is button component This is button component",
                   },
                   {
                    "name":"button",
                     "path":"/button",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is button component This is button component",
                    }
                  ],
      separator: false
    }
  ])

