// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import PaymentsIcon from '@mui/icons-material/Payments'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import HistoryIcon from '@mui/icons-material/History'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CelebrationIcon from '@mui/icons-material/Celebration'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Groups2Icon from '@mui/icons-material/Groups2'
import AddCommentIcon from '@mui/icons-material/AddComment'
import StorageIcon from '@mui/icons-material/Storage'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import SummarizeIcon from '@mui/icons-material/Summarize'

const navigation = () => {
  return [
    {
      title: 'Trang chủ',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Thông tin'
    },
    {
      title: 'Thông báo',
      icon: NotificationsIcon,
      path: '/notifications'
    },
    {
      title: 'Hoạt động',
      icon: AssignmentIcon,
      path: '/activities'
    },
    {
      title: 'Sự kiện',
      path: '/events',
      icon: CelebrationIcon
    },
    {
      title: 'Điểm hoạt động',
      icon: AssessmentIcon,
      path: '/ranking'
    },
    {
      title: 'Thành viên',
      icon: Groups2Icon,
      path: '/members'
    },
    {
      sectionTitle: 'Tài chính'
    },
    {
      title: 'Khoản nộp',
      icon: PaymentsIcon,
      path: '/payment-form'
    },
    {
      title: 'Lịch sử giao dịch',
      path: '/transaction-history',
      icon: HistoryIcon
    },
    {
      title: 'Chi tiêu CLB',
      icon: MonetizationOnIcon,
      path: '/expense-details'
    },
    {
      sectionTitle: 'Tài liệu'
    },
    {
      title: 'Kho lưu trữ',
      icon: StorageIcon,
      path: '/document-storage'
    },
    {
      title: 'Đề xuất hoạt động',
      path: '/activity-proposals',
      icon: AddCommentIcon
    },
    {
      sectionTitle: 'Quản lý'
    },
    {
      title: 'Thủ quỹ',
      icon: PriceChangeIcon,
      path: '/treasurer'
    },
    {
      title: 'Điểm danh',
      icon: FactCheckIcon,
      path: '/attendances'
    },
    {
      title: 'Duyệt thành viên',
      icon: HowToRegIcon,
      path: '/member-approval'
    },
    {
      title: 'Tạo thông báo',
      icon: NotificationAddIcon,
      path: '/notification-creator'
    },
    {
      icon: NoteAddIcon,
      title: 'Tạo hoạt động',
      path: '/activity-creator'
    },
    {
      icon: MeetingRoomIcon,
      title: 'Cơ sở vật chất',
      path: '/infrastructures'
    },
    {
      title: 'Kế hoạch',
      path: '/plans',
      icon: FilePresentIcon
    },
    {
      title: 'Báo cáo',
      path: '/reports',
      icon: SummarizeIcon
    },
  ]
}

export default navigation
