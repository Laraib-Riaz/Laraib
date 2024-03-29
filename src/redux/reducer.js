export const LOGIN = 'LOGIN';
export const SPLASH_SCREEN = 'SPLASH_SCREEN';
export const IS_GUEST = 'IS_GUEST';
export const GUEST_ID = 'GUEST_ID';
export const USER_DETAILS = 'USER_DETAILS';
export const OTP_SEND = 'OTP_SEND';
export const MODE = 'MODE';
export const CHAPTERS = 'CHAPTERS';
export const SEARCH_DATA = 'SEARCH_DATA';
export const BOOKMARK = 'BOOKMARK';
export const APPLANGUAGE = 'APPLANGUAGE';
export const GETLANGUAGE = 'GETLANGUAGE';
export const LANGUAGE = 'LANGUAGE';
export const ALLBOOKMARK = 'ALLBOOKMARK';
export const EVENTBOOKMARK = 'EVENTBOOKMARK';
export const PARISHBOOKMARK = 'PARISHBOOKMARK';
export const ISGUEST = 'ISGUEST';

export const BANNER_DATA = 'BANNER_DATA';
export const PARISH_DATA = 'PARISH_DATA';
export const ACTIVE_EVENT = 'ACTIVE_EVENT';
export const ACTIVE_BOOKS = 'ACTIVE_BOOKS';
export const RCCG_DATA  = 'RCCG_DATA';

export const CHAPTERMARK = 'CHAPTERMARK'
export const LOADER = 'LOADER'
export const  ADVERTISMENT = 'ADVERTISMENT'
export const  ID = 'ID'
export const  GETLIBRARYDATA = 'GETLIBRARYDATA'
export const  ADVMODAL = 'ADVMODAL'
export const  APPSTATE = 'APPSTATE'

const initialState = {
  appState:0,
  userEmail: null,
  perishData: [],
  splash_screen: null,
  is_guest: false,
  user_details: null,
  otp: null,
  mode: null,
  chapters: [],
  search_data: null,
  bookmark: [],
  getlanguage: null,
  applanguage: [],
  language: null,
  allbookmark: [],
  eventbookmark: [],
  parishbookmark: [],
  bannerData: [],
  parishData: [],
  activeEvents: [],
  activeBooks: [],
  rccgData: [],
  chaptermark: [],
  loader: false,
  Advertisement: null,
  id: null,
  getlibrarydata: [],
  advmodal: false,
  guestId: null
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userEmail: action.payload,
      };
    case SPLASH_SCREEN:
      return {
        ...state,
        splash_screen: action.payload,
      };
    case IS_GUEST:
      return {
        ...state,
        is_guest: action.payload,
      };
    case USER_DETAILS:
      return {
        ...state,
        user_details: action.payload,
      };
    case OTP_SEND:
      return {
        ...state,
        otp: action.payload,
      };
    case MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case CHAPTERS:
      return {
        ...state,
        chapters: action.payload,
      };
    case SEARCH_DATA:
      return {
        ...state,
        search_data: action.payload,
      };
    case BOOKMARK:
      return {
        ...state,
        bookmark: action.payload,
      };
    case GETLANGUAGE:
      return {
        ...state,
        getlanguage: action.payload,
      };
    case APPLANGUAGE:
      return {
        ...state,
        applanguage: action.payload,
      };
    case LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ALLBOOKMARK:
      return {
        ...state,
        allbookmark: action.payload,
      };
    case EVENTBOOKMARK:
      return {
        ...state,
        eventbookmark: action.payload,
      };
    case PARISHBOOKMARK:
      return {
        ...state,
        parishbookmark: action.payload,
      };
    case ISGUEST:
      return {
        ...state,
        isGuest: action.payload,
      };
    case BANNER_DATA:
      return {
        ...state,
        bannerData: action.payload,
      };
    case PARISH_DATA:
      return {
        ...state,
        parishData: action.payload,
      };
    case ACTIVE_EVENT:
      return {
        ...state,
        activeEvents: action.payload,
      };
    case ACTIVE_BOOKS:
      return {
        ...state,
        activeBooks: action.payload,
      };
    case RCCG_DATA:
      return {
        ...state,
        rccgData: action.payload,
      };
    case CHAPTERMARK:
      return {
        ...state,
        chaptermark: action.payload,
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case ADVERTISMENT:
      return {
        ...state,
        Advertisement: action.payload,
      };
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    case GETLIBRARYDATA:
      return {
        ...state,
        getlibrarydata: action.payload,
      };
    case ADVMODAL:
      return {
        ...state,
        advmodal: action.payload,
      };
      case APPSTATE:
        return {
          ...state,
          appState: action.payload,
        };
        case GUEST_ID:
        return {
          ...state,
          guestId: action.payload,
        };

    default:
      return state;
  }
};
