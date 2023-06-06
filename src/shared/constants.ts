import { RoutesEnum} from "./types";

export const TAB_ROUTE_TO_TITLE_MAP: Record<RoutesEnum, string> = {
    [RoutesEnum.PASS]: "Пропуск",
    [RoutesEnum.PROFILE]: "Профиль",
    [RoutesEnum.SIGNIN]: "Авторизация",
    [RoutesEnum.RESTORE_PASSWORD]: "Не помню пароль",
    [RoutesEnum.NEW_PASSWORD]: "Новый пароль",
    [RoutesEnum.SUCCESSFULSENDING]: "Сообщение отправлено",
    [RoutesEnum.TAB_BAR_SCREEN]: "Панель навигации",
    [RoutesEnum.SPLASH_SCREEN]: "Приветствие",
    [RoutesEnum.SCHEDULE]: "Расписание",
    [RoutesEnum.ROUTING]: "Роутинг",
    [RoutesEnum.NEWS]: "Новости",
    [RoutesEnum.NEWS_TAB_SCREEN]: ""
}