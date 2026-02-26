import { useAuth } from '../../context/AuthContext';
import UserSVG from '../../assets/UserSVG';
import { useState } from 'react';

interface MscLoginWidgetProps {
  className?: string;
  type?: string;
  logoutBtn?: boolean;
  buttonType?: 'outline' | 'solid' | 'transparent' | 'solid-sm';
}

const MscLoginWidget: React.FC<MscLoginWidgetProps> = ({
  className = '',
  type = 'widget',
  logoutBtn = true,
  buttonType = 'outline',
}) => {
  const [triggerModal, setTriggerModal] = useState('hidden');
  const { user, logout, login } = useAuth();
  const isAuthenticated = !!user;

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    login({
      appState: {
        targetUrl: '/docs',
      },
    });
  };

  const toggleWidget = () => {
    setTriggerModal((prev) => (prev === 'hidden' ? '' : 'hidden'));
  };

  const nonWidgetBtnClasses = (() => {
    switch (buttonType) {
      case 'solid':
        return 'msc-btn msc-btn-blue-solid';
      case 'transparent':
        return 'msc-btn msc-btn-blue-transparent';
      case 'solid-sm':
        return 'msc-btn msc-btn-blue-solid msc-btn-sm';
      case 'outline':
      default:
        return 'msc-btn msc-btn-blue-outline';
    }
  })();

  return type === 'widget' ? (
    <div className={`flex items-center gap-2 ${className}`}>
      {!isAuthenticated ? (
        <button onClick={handleLogin} className="flex flex-col items-center">
          <UserSVG />
          <p className="text-primary-blue font-bold text-sm">Log In</p>
        </button>
      ) : (
        <button onClick={toggleWidget} className="flex flex-col items-center">
          <img src={user?.picture} alt="" className="w-[2rem] rounded-full" />
          <p className="text-primary-blue font-bold text-sm">Account</p>
        </button>
      )}

      <div
        className={`min-w-32 absolute z-50 flex flex-col p-4 rounded-lg shadow-xl left-0 top-10 bg-white ${triggerModal}`}
      >
        <div className="border-b-[1px] border-monochromes-grey_xlight font-semibold pb-1">
          {user?.name}
        </div>
        <button onClick={handleLogout} className="font-semibold pt-1">
          Log Out
        </button>
      </div>
    </div>
  ) : !isAuthenticated ? (
    <button className={`${nonWidgetBtnClasses} ${className}`} onClick={handleLogin}>
      Login
    </button>
  ) : logoutBtn ? (
    <button className={`${nonWidgetBtnClasses} ${className}`} onClick={handleLogout}>
      Logout
    </button>
  ) : (
    ''
  );
};

export default MscLoginWidget;
