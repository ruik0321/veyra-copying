export const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="0" width="8" height="8" fill="currentColor" />
    <rect x="0" y="8" width="8" height="8" fill="currentColor" />
    <rect x="16" y="8" width="8" height="8" fill="currentColor" />
    <rect x="8" y="16" width="8" height="8" fill="currentColor" />
  </svg>
)

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <LogoIcon />
    <span className="font-medium text-[24px]">Veyra</span>
  </div>
)

export const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.143 5.64852L5.673 1.17851L6.8515 0L13.3333 6.48185L6.8515 12.9636L5.673 11.7851L10.143 7.31518H0V5.64852H10.143Z"
      fill="currentColor"
      transform="translate(3.33 3.5)"
    />
  </svg>
)

export const ArrowUpRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
      fill="currentColor"
      transform="translate(3.5 3.5)"
    />
  </svg>
)

export const IconSparkle = () => (
  <svg width="21" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124C8.72757 13.8128 9.81283 12.7276 11.124 12C9.81283 11.2724 8.72757 10.1872 8 8.87601C7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z" fill="currentColor" />
  </svg>
)

export const IconShield = () => (
  <svg width="18" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z" fill="currentColor" />
  </svg>
)

export const IconSmile = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" fill="currentColor" />
  </svg>
)

export const IconCheck = () => (
  <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36396 9.19238L15.5564 0L16.9706 1.41421L6.36396 12.0208L0 5.65688L1.41422 4.24268L6.36396 9.19238Z" fill="currentColor" />
  </svg>
)

export const IconX = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.36396 4.94978L11.3138 0L12.728 1.41421L7.77816 6.36398L12.728 11.3137L11.3138 12.7279L6.36396 7.77818L1.41422 12.7279L0 11.3137L4.94976 6.36398L0 1.41421L1.41422 0L6.36396 4.94978Z" fill="currentColor"/>
  </svg>
)

export const IconYood = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill="#C2DCFD"/>
    <path d="M28 44.5L63.0014 17.0059V36.288L28 63.7822V44.5Z" fill="#0074D7"/>
    <path d="M33 17H16V34L33 34V17Z" fill="#0074D7"/>
  </svg>
)

export const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)