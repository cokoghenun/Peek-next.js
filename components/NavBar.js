import Link from './Link';
import '../public/stylesheets/css/fonts.css';

const NavBar = React.forwardRef(({ labels }, ref) => {
  return (
    <>
      <nav className='nav' ref={ref}>
        <div className='nav__name'>Peek</div>
        <div className='nav__group'>
          <ul className='nav__list'>
            <li className='nav__list__item'>
              <Link href='/'>
                <a className='nav__list__item__link'>
                  <img
                    src='/image/icon/bulb.svg'
                    alt='icon'
                    className='nav__list__item__link__icon'
                  />
                  <span className='nav__list__item__link__text'>Note</span>
                </a>
              </Link>
            </li>
            <li className='nav__list__item'>
              <Link href='/reminders'>
                <a className='nav__list__item__link'>
                  <img
                    src='/image/icon/bell.svg'
                    alt='icon'
                    className='nav__list__item__link__icon'
                  />
                  <span className='nav__list__item__link__text'>Reminders</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav__group nav__group--middle'>
          <ul className='nav__list'>
            {labels.map((l, m) => (
              <li className='nav__list__item' key={m}>
                <Link href={`/label/${l}`} as={`/label/${l}`}>
                  <a className='nav__list__item__link'>
                    <img
                      src='/image/icon/badge.svg'
                      alt='icon'
                      className='nav__list__item__link__icon'
                    />
                    <span className='nav__list__item__link__text'>{l}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__group'>
          <ul className='nav__list'>
            <li className='nav__list__item'>
              <Link href='/archive'>
                <a className='nav__list__item__link'>
                  <img
                    src='/image/icon/archive.svg'
                    alt='icon'
                    className='nav__list__item__link__icon'
                  />
                  <span className='nav__list__item__link__text'>Archive</span>
                </a>
              </Link>
            </li>
            <li className='nav__list__item'>
              <Link href='/trash'>
                <a className='nav__list__item__link'>
                  <img
                    src='/image/icon/trash.svg'
                    alt='icon'
                    className='nav__list__item__link__icon'
                  />
                  <span className='nav__list__item__link__text'>Trash</span>
                </a>
              </Link>
            </li>
            <li className='nav__list__item'>
              <Link href='/settings'>
                <a className='nav__list__item__link'>
                  <img
                    src='/image/icon/settings.svg'
                    alt='icon'
                    className='nav__list__item__link__icon'
                  />
                  <span className='nav__list__item__link__text'>Settings</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .nav {
          opacity: 0;
          left: -100%;
          visibility: hidden;
          pointer-events: none;
          top: 0;
          left: 0;
          color: white;
          width: 264px;
          height: 100vh;
          position: fixed;
          overflow-y: auto;
          background: white;
          padding-right: 5px;
          transition: 0.2s all linear;
          // transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
          box-shadow: 0 0 16px rgba(0, 0, 0, 0.28);
          webkit-box-shadow: 0 0 16px rgba(0, 0, 0, 0.28);
        }
        .nav--active {
          left: 0;
          opacity: 1;
          visibility: visible;
          pointer-events: inherit;
          transition: 0.4s all ease-in-out;
          // transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        }
        .nav__name {
          opacity: 1;
          color: #5f6368;
          font-size: 22px;
          line-height: 24px;
          padding-left: 16px;
          margin: 20px 0 10px 0;
          font-family: 'Work Sans', sans-serif;
        }
        .nav__group {
          padding: 8px 0;
        }
        .nav__group--middle {
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }
        .nav__list,
        .nav__list__item {
          all: unset;
        }
        .nav__list__item__link {
          display: flex;
          align-items: center;
          padding: 12px 0 12px 16px;

          text-decoration: none;
          color: black;
          border-radius: 0 25px 25px 0;
        }
        .nav__list__item__link__text {
          overflow: hidden;
          padding-left: 32px;
          white-space: nowrap;
          color: rgb(32, 33, 36);
          text-overflow: ellipsis;
          font-family: 'Noto Sans', sans-serif;
        }
        .selected {
          background-color: #feefc3;
        }
      `}</style>
    </>
  );
});
export default NavBar;
