
import ProfileAccount from './ProfileAccount';
import ProfileMessages from './ProfileMessages';
import OrdersQuerySection from './OrdersQuerySection';
import OrdersListSection from './OrdersListSection';
import OrderDetailModal from './OrderDetailModal';
import AuthorizationSection from './AuthorizationSection';
import PasswordSection from './PasswordSection';

const ProfileContent = ({ section }) => {
    const renderSection = () => {
      switch (section) {
        case 'account':
          return <ProfileAccount />;
        case 'messages':
          return <ProfileMessages />;
        case 'orders-query':
          return <OrdersQuerySection />;
        case 'orders-list':
          return <OrdersListSection />;
        case 'order-detail':
          return <OrderDetailModal />;
        case 'authorization':
          return <AuthorizationSection />;
        case 'password':
          return <PasswordSection />;
        default:
          return <p>Lütfen bir bölüm seçin.</p>;
      }
    };
  
    return (
      <section className="profile-content">
        <div id="profile-section-content">
          {renderSection()}
        </div>
      </section>
    );
  };
  

export default ProfileContent;
