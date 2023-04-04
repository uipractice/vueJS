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
                  "name":"Input",
                  "path":"/Input",
                  "desc":"This is Input component",
                  "logoSrc":buttonicon,
                  "hovLogo":hovButtonIcon
                  } , 
                {
                  "name":"Dropdown",
                  "path":"/Dropdown",
                  "desc":"This is Dropdown component",
                  "logoSrc":buttonicon,
                  "hovLogo":hovButtonIcon
                  } , 
                   {
                    "name":"FileUpload",
                     "path":"/FileUpload",
                     "desc":"This is FileUpload component",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                    } , 
                    {
                      "name":"Form",
                       "path":"/Form",
                       "desc":"This is Form component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"Radio",
                       "path":"/Radio",
                       "desc":"This is Radio component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"Checkbox",
                       "path":"/Checkbox",
                       "desc":"This is Checkbox component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"Toggle",
                       "path":"/Toggle",
                       "desc":"This is Toggle component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"QDate",
                       "path":"/QDate",
                       "desc":"This is QDate component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":" InnerLoading",
                       "path":"/InnerLoading",
                       "desc":"This is  InnerLoading component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"Menu",
                       "path":"/Menu",
                       "desc":"This is Menu component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                    
                  ]
    },
    {
      
      label: 'Utility Component',
      listOfSubCom:[
                   {
                    "name":"Pagination",
                     "path":"/Pagination",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is Pagination component",
                   },
                   {
                    "name":"Stepper",
                     "path":"/Stepper",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"This is Stepper component",
                    },
                    {
                      "name":"Table",
                       "path":"/Table",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon,
                       "desc":"This is Table component",
                      },
                      {
                        "name":"Tabs",
                         "path":"/Tabs",
                         "logoSrc":buttonicon,
                         "hovLogo":hovButtonIcon,
                         "desc":"This is Tabs component",
                        },
                        {
                          "name":"Tooltip",
                           "path":"/Tooltip",
                           "logoSrc":buttonicon,
                           "hovLogo":hovButtonIcon,
                           "desc":"This is Tooltip component",
                          },
                          {
                            "name":"InfiniteScroll",
                             "path":"/InfiniteScroll",
                             "logoSrc":buttonicon,
                             "hovLogo":hovButtonIcon,
                             "desc":"This is VirtualScroll component",
                            },
                            {
                              "name":"Notify",
                               "path":"/Notify",
                               "logoSrc":buttonicon,
                               "hovLogo":hovButtonIcon,
                               "desc":"This is Notify component",
                              }
                        
                  ]
    }
  ])

