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

import circularProgressBar from  '../images/circularProgressBar.svg'
import circularProgressBarHover from  '../images/circularProgressBarHover.svg'

import exportToCSV from  '../images/exportToCSV.svg'
import exportToCSVHover from  '../images/exportToCSVHover.svg'


import checkbox from  '../images/checkbox.svg'
import checkboxHover from  '../images/checkboxHover.svg'


import avatar from  '../images/avatar.svg'
import avatarHover from  '../images/avatarHover.svg'


import infiniteScroll from  '../images/infiniteScroll.svg'
import infiniteScrollHover from  '../images/infiniteScrollHover.svg'

 export const menuList = ref([
    {
     
      label: 'Basic Component',
      listOfSubCom:[
                  {
                  "name":"Avatar",
                  "path":"/avatar",
                  "desc":"This is avatar component, this can be used as a profile picture,",
                  "logoSrc":avatar,
                  "hovLogo":avatarHover
                  },
                   {
                    "name":"Button",
                     "path":"/button",
                     "desc":"This is button component, this can be used in varity of usecases, as in form controls, in alerts & action triggers etc.,",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon
                   },
                    {
                        "name":"Badge",
                         "path":"/Badge",
                         "desc":"This is badge component, this can be used in varity of usecases, as in forms etc.,",
                         "logoSrc":badgeIcon,
                         "hovLogo":hovBadgeIcon
                    },
                    {
                    "name":"BreadCrumbs",
                    "path":"/BreadCrumbs",
                    "desc":"Breadcrumbs give users an easy-to-understand overview of where the page sits in your site.",
                    "logoSrc":breadcrumbIcon,
                    "hovLogo":hovBreadcrumbIcon
                   },
                   {
                    "name":"Cards",
                    "path":"/Cards",
                    "desc":"This is Cards component, it can be used to display content as a box",
                    "logoSrc":card,
                    "hovLogo":hovCard
                   },
                   {
                    "name":"CircularProgress",
                    "path":"/CircularProgress",
                    "desc":"A content-heavy website increases its loading time, wrecks the user experience, lowers the search engine ranking.",
                    "logoSrc":circularProgressBar,
                    "hovLogo":circularProgressBarHover
                   },
                   {
                    "name":"Dialog",
                    "path":"/Dialog",
                    "desc":"A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. ",
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
                  "desc":"This is Input componentThis is Input component, this can be used in varity of usecases, as in form controls, login & user inputs etc.,",
                  "logoSrc":inputicon,
                  "hovLogo":hovInputIcon
                  } , 
                {
                  "name":"Dropdown",
                  "path":"/Dropdown",
                  "desc":"A drop-down menu embeds additional links or content, allowing you to construct more advanced navigation and link categorization.",
                  "logoSrc":dropdown,
                  "hovLogo":hovDropdown
                  } , 
                   {
                    "name":"FileUpload",
                     "path":"/FileUpload",
                     "desc":"File Input is a field which the user can use to upload one or more files (photos, documents or any other file type) from local storage.",
                     "logoSrc":imageicon,
                     "hovLogo":hovImageIcon
                    } , 
                    {
                      "name":"Form",
                       "path":"/Form",
                       "desc":"This is Form component,this can be used for multi purpose forms",
                       "logoSrc":formicon,
                       "hovLogo":hovFormIcon
                     },
                     {
                      "name":"Radio",
                       "path":"/Radio",
                       "desc":"This is Radio Button component, this can be used to select a option, as in form controls, in user query inputs & action triggers etc.,",
                       "logoSrc":radiocheckicon,
                       "hovLogo":hovRadioCheckIcon
                     },
                     {
                      "name":"Checkbox",
                       "path":"/Checkbox",
                       "desc":"This is checkbox component, this can be used to select a option, as in form controls, in user query inputs & action triggers etc.",
                       "logoSrc":checkbox,
                       "hovLogo":checkboxHover
                     },
                     {
                      "name":"Toggle",
                       "path":"/Toggle",
                       "desc":"Switch is an on/off control that can be toggled via clicking or dragging.",
                       "logoSrc":toggleButton,
                       "hovLogo":hovToggleButton
                     },
                     {
                      "name":"QDate",
                       "path":"/QDate",
                       "desc":"This functionality lets the user pick both the date and time within a single interface. ",
                       "logoSrc":buttonicon,
                       "hovLogo":hovButtonIcon
                     },
                     {
                      "name":"InnerLoading",
                       "path":"/InnerLoading",
                       "desc":"Spinner is used to display progress of those tasks whose total time of completion is unknown.",
                       "logoSrc":spinnericon,
                       "hovLogo":hovSpinnerIcon
                     },
                     {
                      "name":"Menu",
                       "path":"/Menu",
                       "desc":"Menu is a floating panel containing list of options.",
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
                     "desc":"It lets you split a huge amount of content within the tables into smaller parts.",
                   },
                   {
                    "name":"Stepper",
                     "path":"/Stepper",
                     "logoSrc":buttonicon,
                     "hovLogo":hovButtonIcon,
                     "desc":"Stepper provides a wizard-like workflow by dividing content into logical steps and can be aligned vertically as well as horizontally.",
                    },
                      {
                        "name":"Tabs",
                         "path":"/Tabs",
                         "logoSrc":tabsicon,
                         "hovLogo":hovTabsIcon,
                         "desc":"A Tab allows multiple documents or panels to be contained within a single window and switching between the documents.",
                        },
                        {
                          "name":"Tooltip",
                           "path":"/Tooltip",
                           "logoSrc":tooltipicon,
                           "hovLogo":hovTooltipIcon,
                           "desc":"A hint which appears when a cursor is positioned over an icon, image, hyperlink, or any other element in a graphical UI.",
                          },
                          {
                            "name":"InfiniteScroll",
                             "path":"/InfiniteScroll",
                             "logoSrc":infiniteScroll,
                              "hovLogo":infiniteScrollHover,
                             "desc":"This is InfiniteScroll component,you can scroll to bottom and top",
                            },
                            {
                              "name":"Notify",
                               "path":"/Notify",
                               "logoSrc":alerticon,
                               "hovLogo":hovAlertIcon,
                               "desc":"A small message that pops up at  screen and disappears on its own after a few seconds. ",
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
           "desc":"This is Table component, this can be used to show for list of items",
          },
          {
            "name":"ApiTable(Pagination,filter)",
             "path":"/ApiTable(Pagination,filter)",
             "logoSrc":apidatatable,
             "hovLogo":hovApiDataTable,
             "desc":"The DataTables API is designed to reflect the structure of the data in the table and returns a DataTables API instance.",
            },
            {
              "name":"PopupEditingTable(shorting)",
               "path":"/PopupEditingTable(shorting)",
               "logoSrc":editabletable,
               "hovLogo":hovEditableTable,
               "desc":"Inline Editing allows a user to select any editable element on the page and edit it in-place which looks just like the final page.",
              },
              {
                "name":"ExportToCSVTable",
                 "path":"/ExportToCSVTable",
                 "logoSrc":exportToCSV,
                 "hovLogo":exportToCSVHover,
                 "desc":"This is ExportToCSV Table component,through this you can export the data from table",
                },
      ]},
      {
        label: 'Custome Component',
        listOfSubCom:[
          {
            "name":"ExpensionItem",
             "path":"/ExpensionItem",
             "logoSrc":tableicon,
             "hovLogo":hovTableIcon,
             "desc":"This is ExpensionItem component, this can be used to show for list of items",
            },]
      }
  ])

