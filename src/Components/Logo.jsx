const Logo = ({ collapsed, darkTheme }) => {
  return (
    <div className={`logo ${collapsed ? 'collapsed' : ''}`} style={{ width: collapsed ? '80px' : '250px' }}>
      {!collapsed && (
        <div className="logo-text">
          <h1 style={{ color: darkTheme ? 'white' : 'black' }}>Dash<span className='logo-span'>Board</span></h1>
        </div>
      )}
    </div>
  );
};

export default Logo;
