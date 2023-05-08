import {ref} from 'vue'
import buttonicon from '@/images/buttonicon.svg';
import hovButtonIcon from '@/images/hovButtonIcon.svg';
import badgeIcon from '../images/badge.svg';
import hovBadgeIcon from '../images/Badge_Hovered.svg';
import breadcrumbIcon from '../images/breadcrumbIcon.svg';
import hovBreadcrumbIcon from '../images/hovBreadcrumbIcon.svg';
import card from '../images/card.svg';
import hovCard from '../images/hovCard.svg';
import progressIcon from '../images/progressIcon.svg';
import hovProgressIcon from '../images/hovProgressIcon.svg';
import toasticon from '../images/toasticon.svg';
import hovToastIcon from '../images/hovToastIcon.svg';
import pagination from '../images/pagination.svg';
import hovPagination from '../images/hovPagination.svg';
import tabsicon from '../images/tabsicon.svg';
import hovTabsIcon from '../images/hovTabsIcon.svg';
import tooltipicon from '../images/tooltipicon.svg';
import hovTooltipIcon from '../images/hovTooltipIcon.svg';
import modalicon from '../images/modalicon.svg';
import hovModalIcon from '../images/hovModalIcon.svg';
import inputicon from '../images/inputicon.svg';
import hovInputIcon from '../images/hovInputIcon.svg';
import dropdown from '../images/dropdown.svg';
import hovDropdown from '../images/hovDropdown.svg';
import formicon from '../images/formicon.svg';
import hovFormIcon from '../images/hovFormIcon.svg';
import hovRadioCheckIcon from '../images/hovRadioCheckIcon.svg';
import radiocheckicon from '../images/radiocheckicon.svg';
import toggleButton from '../images/toggleButton.svg';
import hovToggleButton from '../images/hovToggleButton.svg';
import alerticon from '../images/alerticon.svg';
import hovAlertIcon from '../images/hovAlertIcon.svg';
import spinnericon from '../images/spinnericon.svg';
import hovSpinnerIcon from '../images/hovSpinnerIcon.svg';
import tableicon from '../images/tableicon.svg';
import hovTableIcon from '../images/hovTableIcon.svg';
import editabletable from '../images/editabletable.svg';
import hovEditableTable from '../images/hovEditableTable.svg';
import apidatatable from '../images/apidatatable.svg';
import hovApiDataTable from '../images/hovApiDataTable.svg';
import imageicon from '../images/imageicon.svg';
import hovImageIcon from '../images/hovImageIcon.svg';
import ListGroup from '../images/ListGroup.svg'
import ListGroup_Hover from  '../images/ListGroup_Hovered.svg'
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
                         "logoSrc":badgeIcon,
                         "hovLogo":hovBadgeIcon
                    },
                    {
                    "name":"BreadCrumbs",
                    "path":"/BreadCrumbs",
                    "desc":"This is BreadCrumbs component",
                    "logoSrc":breadcrumbIcon,
                    "hovLogo":hovBreadcrumbIcon
                   },
                   {
                    "name":"Cards",
                    "path":"/Cards",
                    "desc":"This is Cards component",
                    "logoSrc":card,
                    "hovLogo":hovCard
                   },
                   {
                    "name":"CircularProgress",
                    "path":"/CircularProgress",
                    "desc":"This is  CircularProgress component",
                    "logoSrc":progressIcon,
                    "hovLogo":hovProgressIcon
                   },
                   {
                    "name":"Dialog",
                    "path":"/Dialog",
                    "desc":"This is  Dialog component",
                    "logoSrc":modalicon,
                    "hovLogo":hovModalIcon
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
                  "logoSrc":inputicon,
                  "hovLogo":hovInputIcon
                  } , 
                {
                  "name":"Dropdown",
                  "path":"/Dropdown",
                  "desc":"This is Dropdown component",
                  "logoSrc":dropdown,
                  "hovLogo":hovDropdown
                  } , 
                   {
                    "name":"FileUpload",
                     "path":"/FileUpload",
                     "desc":"This is FileUpload component",
                     "logoSrc":imageicon,
                     "hovLogo":hovImageIcon
                    } , 
                    {
                      "name":"Form",
                       "path":"/Form",
                       "desc":"This is Form component",
                       "logoSrc":formicon,
                       "hovLogo":hovFormIcon
                     },
                     {
                      "name":"Radio",
                       "path":"/Radio",
                       "desc":"This is Radio component",
                       "logoSrc":radiocheckicon,
                       "hovLogo":hovRadioCheckIcon
                     },
                     {
                      "name":"Checkbox",
                       "path":"/Checkbox",
                       "desc":"This is Checkbox component",
                       "logoSrc":radiocheckicon,
                       "hovLogo":hovRadioCheckIcon
                     },
                     {
                      "name":"Toggle",
                       "path":"/Toggle",
                       "desc":"This is Toggle component",
                       "logoSrc":toggleButton,
                       "hovLogo":hovToggleButton
                     },
                     {
                      "name":"QDate",
                       "path":"/QDate",
                       "desc":"This is QDate component",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"InnerLoading",
                       "path":"/InnerLoading",
                       "desc":"This is  InnerLoading component",
                       "logoSrc":spinnericon,
                       "hovLogo":hovSpinnerIcon
                     },
                     {
                      "name":"Menu",
                       "path":"/Menu",
                       "desc":"This is Menu component",
                       "logoSrc":ListGroup,
                       "hovLogo":ListGroup_Hover
                     },
                    
                  ]
    },
    {
      
      label: 'Utility Component',
      listOfSubCom:[
                   {
                    "name":"Pagination",
                     "path":"/Pagination",
                     "logoSrc":pagination,
                     "hovLogo":hovPagination,
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
                        "name":"Tabs",
                         "path":"/Tabs",
                         "logoSrc":tabsicon,
                         "hovLogo":hovTabsIcon,
                         "desc":"This is Tabs component",
                        },
                        {
                          "name":"Tooltip",
                           "path":"/Tooltip",
                           "logoSrc":tooltipicon,
                           "hovLogo":hovTooltipIcon,
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
                               "logoSrc":alerticon,
                               "hovLogo":hovAlertIcon,
                               "desc":"This is Notify component",
                              }
                        
                  ]
    },
    {
      
      label: 'Table Component',
      listOfSubCom:[
        {
          "name":"Table",
           "path":"/Table",
           "logoSrc":tableicon,
           "hovLogo":hovTableIcon,
           "desc":"This is Table component",
          },
          {
            "name":"ServerSideTable",
             "path":"/ServerSideTable",
             "logoSrc":apidatatable,
             "hovLogo":hovApiDataTable,
             "desc":"This is ServerSide Table component",
            },
            {
              "name":"PopupEditingTable",
               "path":"/PopupEditingTable",
               "logoSrc":editabletable,
               "hovLogo":hovEditableTable,
               "desc":"This is PopupEditing Table component",
              },
              {
                "name":"ExportToCSVTable",
                 "path":"/ExportToCSVTable",
                 "logoSrc":buttonicon,
                 "hovLogo":hovButtonIcon,
                 "desc":"This is ExportToCSV Table component",
                },
      ]}
  ])

