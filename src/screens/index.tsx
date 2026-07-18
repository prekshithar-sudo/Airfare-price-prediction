import { AddNewCardScreen } from './pages/AddNewCardScreen';
import { CategoryScreen } from './pages/CategoryScreen';
import { CheckoutPaymentMethodsScreen } from './pages/CheckoutPaymentMethodsScreen';
import { CoursesListFilterScreen } from './pages/CoursesListFilterScreen';
import { CoursesListScreen } from './pages/CoursesListScreen';
import { CreateNewPasswordScreen } from './pages/CreateNewPasswordScreen';
import { CreateNewPinScreen } from './pages/CreateNewPinScreen';
import { CurriculumScreen } from './pages/CurriculumScreen';
import { EditEReceiptScreen } from './pages/EditEReceiptScreen';
import { EditProfileScreen } from './pages/EditProfileScreen';
import { EReceiptScreen } from './pages/EReceiptScreen';
import { FillYourProfileScreen } from './pages/FillYourProfileScreen';
import { ForgotPasswordScreen } from './pages/ForgotPasswordScreen';
import { HomeScreen } from './pages/HomeScreen';
import { InboxCallsScreen } from './pages/InboxCallsScreen';
import { InboxChatMessagesScreen } from './pages/InboxChatMessagesScreen';
import { InboxChatsScreen } from './pages/InboxChatsScreen';
import { InboxVoiceCallScreen } from './pages/InboxVoiceCallScreen';
import { IntroOneScreen } from './pages/IntroOneScreen';
import { IntroThreeScreen } from './pages/IntroThreeScreen';
import { IntroTwoScreen } from './pages/IntroTwoScreen';
import { InviteFriendsScreen } from './pages/InviteFriendsScreen';
import { LanguageScreen } from './pages/LanguageScreen';
import { LaunchingScreen } from './pages/LaunchingScreen';
import { LetsYouInScreen } from './pages/LetsYouInScreen';
import { LoginScreen } from './pages/LoginScreen';
import { MentorsListScreen } from './pages/MentorsListScreen';
import { MyBookmarkScreen } from './pages/MyBookmarkScreen';
import { MyCourseCertificateScreen } from './pages/MyCourseCertificateScreen';
import { MyCourseCompletedScreen } from './pages/MyCourseCompletedScreen';
import { MyCourseCompletionScreen } from './pages/MyCourseCompletionScreen';
import { MyCourseLessonsScreen } from './pages/MyCourseLessonsScreen';
import { MyCourseOngoingLessonsScreen } from './pages/MyCourseOngoingLessonsScreen';
import { MyCourseOngoingScreen } from './pages/MyCourseOngoingScreen';
import { MyCourseOngoingVideoScreen } from './pages/MyCourseOngoingVideoScreen';
import { NotificationSettingsScreen } from './pages/NotificationSettingsScreen';
import { NotificationsScreen } from './pages/NotificationsScreen';
import { OnboardingCongratulationsScreen } from './pages/OnboardingCongratulationsScreen';
import { PasswordResetCongratulationsScreen } from './pages/PasswordResetCongratulationsScreen';
import { PaymentMethodsScreen } from './pages/PaymentMethodsScreen';
import { PaymentOptionsScreen } from './pages/PaymentOptionsScreen';
import { PopularCoursesScreen } from './pages/PopularCoursesScreen';
import { ProfilesScreen } from './pages/ProfilesScreen';
import { RegisterNowScreen } from './pages/RegisterNowScreen';
import { RemoveMyBookmarkScreen } from './pages/RemoveMyBookmarkScreen';
import { ReviewsScreen } from './pages/ReviewsScreen';
import { SearchScreen } from './pages/SearchScreen';
import { SecurityScreen } from './pages/SecurityScreen';
import { SetYourFingerprintScreen } from './pages/SetYourFingerprintScreen';
import { SingleCourseCurriculumScreen } from './pages/SingleCourseCurriculumScreen';
import { SingleCourseDetailsScreen } from './pages/SingleCourseDetailsScreen';
import { SingleMentorDetailsScreen } from './pages/SingleMentorDetailsScreen';
import { SingleMentorRatingScreen } from './pages/SingleMentorRatingScreen';
import { TermsConditionsScreen } from './pages/TermsConditionsScreen';
import { TopMentorsScreen } from './pages/TopMentorsScreen';
import { TransactionsScreen } from './pages/TransactionsScreen';
import { VerifyForgotPasswordScreen } from './pages/VerifyForgotPasswordScreen';
import { WriteReviewScreen } from './pages/WriteReviewScreen';
import type { AppScreenComponent, ScreenDefinition } from './types';

export type { ScreenDefinition, ScreenDefinitionBase, ScreenGroup } from './types';

const screenComponents: AppScreenComponent[] = [
  LaunchingScreen,
  IntroOneScreen,
  IntroTwoScreen,
  IntroThreeScreen,
  LetsYouInScreen,
  RegisterNowScreen,
  LoginScreen,
  FillYourProfileScreen,
  CreateNewPinScreen,
  SetYourFingerprintScreen,
  OnboardingCongratulationsScreen,
  ForgotPasswordScreen,
  VerifyForgotPasswordScreen,
  CreateNewPasswordScreen,
  PasswordResetCongratulationsScreen,
  HomeScreen,
  CategoryScreen,
  SearchScreen,
  PopularCoursesScreen,
  TopMentorsScreen,
  CoursesListScreen,
  CoursesListFilterScreen,
  MentorsListScreen,
  SingleCourseDetailsScreen,
  SingleCourseCurriculumScreen,
  MyBookmarkScreen,
  RemoveMyBookmarkScreen,
  NotificationsScreen,
  SingleMentorDetailsScreen,
  SingleMentorRatingScreen,
  CurriculumScreen,
  ReviewsScreen,
  WriteReviewScreen,
  PaymentMethodsScreen,
  CheckoutPaymentMethodsScreen,
  MyCourseCompletedScreen,
  MyCourseLessonsScreen,
  MyCourseCertificateScreen,
  MyCourseOngoingScreen,
  MyCourseOngoingLessonsScreen,
  MyCourseOngoingVideoScreen,
  MyCourseCompletionScreen,
  InboxChatsScreen,
  InboxChatMessagesScreen,
  InboxCallsScreen,
  InboxVoiceCallScreen,
  TransactionsScreen,
  EReceiptScreen,
  EditEReceiptScreen,
  ProfilesScreen,
  EditProfileScreen,
  NotificationSettingsScreen,
  PaymentOptionsScreen,
  AddNewCardScreen,
  SecurityScreen,
  LanguageScreen,
  TermsConditionsScreen,
  InviteFriendsScreen,
];

export const screens: ScreenDefinition[] = screenComponents.map(component => ({
  ...component.screen,
  component,
}));

export {
  AddNewCardScreen,
  CategoryScreen,
  CheckoutPaymentMethodsScreen,
  CoursesListFilterScreen,
  CoursesListScreen,
  CreateNewPasswordScreen,
  CreateNewPinScreen,
  CurriculumScreen,
  EditEReceiptScreen,
  EditProfileScreen,
  EReceiptScreen,
  FillYourProfileScreen,
  ForgotPasswordScreen,
  HomeScreen,
  InboxCallsScreen,
  InboxChatMessagesScreen,
  InboxChatsScreen,
  InboxVoiceCallScreen,
  IntroOneScreen,
  IntroThreeScreen,
  IntroTwoScreen,
  InviteFriendsScreen,
  LanguageScreen,
  LaunchingScreen,
  LetsYouInScreen,
  LoginScreen,
  MentorsListScreen,
  MyBookmarkScreen,
  MyCourseCertificateScreen,
  MyCourseCompletedScreen,
  MyCourseCompletionScreen,
  MyCourseLessonsScreen,
  MyCourseOngoingLessonsScreen,
  MyCourseOngoingScreen,
  MyCourseOngoingVideoScreen,
  NotificationSettingsScreen,
  NotificationsScreen,
  OnboardingCongratulationsScreen,
  PasswordResetCongratulationsScreen,
  PaymentMethodsScreen,
  PaymentOptionsScreen,
  PopularCoursesScreen,
  ProfilesScreen,
  RegisterNowScreen,
  RemoveMyBookmarkScreen,
  ReviewsScreen,
  SearchScreen,
  SecurityScreen,
  SetYourFingerprintScreen,
  SingleCourseCurriculumScreen,
  SingleCourseDetailsScreen,
  SingleMentorDetailsScreen,
  SingleMentorRatingScreen,
  TermsConditionsScreen,
  TopMentorsScreen,
  TransactionsScreen,
  VerifyForgotPasswordScreen,
  WriteReviewScreen,
};
