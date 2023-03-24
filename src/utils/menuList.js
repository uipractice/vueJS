import {ref} from 'vue'
import buttonicon from '@/images/buttonicon.svg';
import hovButtonIcon from '@/images/hovButtonIcon.svg';

 export const menuList = ref([
    {
     
      label: 'Basic Component',
      listOfSubCom:[
                  {
                  "name":"Avatar",
                  "path":"/avatar",
                  "desc":"This is avatar component",
                  "logoSrc":buttonicon,
                  "hovLogo":hovButtonIcon
                  },
                   {
                    "name":"Button",
                     "path":"/button",
                     "desc":"This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                   },
                    {
                        "name":"Badge",
                         "path":"/Badge",
                         "desc":"This is Badge component",
                         "logoSrc":buttonicon,
                         "hovLogo":hovButtonIcon
                    },
                    {
                    "name":"BreadCrumbs",
                    "path":"/BreadCrumbs",
                    "desc":"This is BreadCrumbs component",
                    "logoSrc":buttonicon,
                    "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"Cards",
                    "path":"/Cards",
                    "desc":"This is Cards component",
                    "logoSrc":buttonicon,
                    "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"CircularProgress",
                    "path":"/CircularProgress",
                    "desc":"This is  CircularProgress component",
                    "logoSrc":buttonicon,
                    "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"Dialog",
                    "path":"/Dialog",
                    "desc":"This is  Dialog component",
                    "logoSrc":buttonicon,
                    "hovLogo":hovButtonIcon
                   }
                   
                  
                      
                  ]
    },
    {
     
      label: 'Form Component',
      listOfSubCom:[
                   {
                    "name":"button",
                     "path":"/button",
                     "desc":"This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                   },
                   {
                    "name":"button",
                     "path":"/button",
                     "desc":"This is button component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                    }
                  ]
    },
    {
      
      label: 'Utility Component',
      listOfSubCom:[
                   {
                    "name":"button",
                     "path":"/button",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is button component",
                   },
                   {
                    "name":"button",
                     "path":"/button",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is button component",
                    },
                    {
                      "name":"button",
                       "path":"/button",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon,
                       "desc":"This is button component",
                      },
                      {
                        "name":"button",
                         "path":"/button",
                         "logoSrc":buttonicon,
                         "hovLogo":hovButtonIcon,
                         "desc":"This is button component",
                        }
                  ]
    }
  ])

