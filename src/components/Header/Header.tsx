import reactLogo from './../../assets/react.svg';

export function Header() {
  return (
    <header className={'section header'}>
      <div className={'container header-container'}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        React Forms
      </div>
    </header>
  );
}
