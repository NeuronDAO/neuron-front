import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

import IconSite from "@material-ui/icons/Language";
import IconTwiter from "@material-ui/icons/Twitter";
import IconGitHub from "@material-ui/icons/GitHub";
import IconLinked from "@material-ui/icons/LinkedIn";
import IconTelega from "@material-ui/icons/Telegram";
/**
 * [Формируем список ссылок, указанных пользователем]
 *
 * @param {Array} props [Список ссылок в массиве]
 * @param {String?} site [Персональный сайт пользователя]
 * @param {String?} twitter [Ссылка на аккаунт в твитере]
 * @param {String?} github [Ссылка на профиль на GitHub]
 * @param {String?} linkedIn [Ссылка на профиль на Lindked]
 * @param {String?} telegram [Ссылка на аккаунт в телеге]
 *
 * Функция нуждается в переработке, исходя из полученного массива.
 * Лучше будет писать обработки в цикле (там же расставлять иконки и ссылки),
 * чем пытаться писать обработчик вот так, костылём
 */
const MiddleDividers = ({site, twitter, github, linkedIn, telegram}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider variant="fullWidth" />
      <div className={classes.section}>
        <Link href={site}>
          <Chip
            icon={<IconSite />}
            variant="outlined"
            disabled={!!site}
            size="small"
            className={classes.chip}
            label="WebSite"
          />
        </Link>
        <Link href={twitter}>
          <Chip
            icon={<IconTwiter />}
            variant="outlined"
            disabled={!!twitter}
            size="small"
            className={classes.chip}
            label="Twiter"
          />
        </Link>
        <Link href={github}>
          <Chip
            icon={<IconGitHub />}
            variant="outlined"
            disabled={!!github}
            size="small"
            className={classes.chip}
            label="GitHub"
          />
        </Link>
        <Link href={linkedIn}>
          <Chip
            icon={<IconLinked />}
            variant="outlined"
            disabled={!!linkedIn}
            size="small"
            className={classes.chip}
            label="LinkedIn"
          />
        </Link>
        <Link href={telegram}>
          <Chip
            icon={<IconTelega />}
            variant="outlined"
            disabled={!!telegram}
            size="small"
            className={classes.chip}
            label="Telegram"
          />
        </Link>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  section: {
    margin: theme.spacing(1, 0),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

MiddleDividers.propTypes = {
  site: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
  telegram: PropTypes.string,
};
MiddleDividers.defaultProps = {
  site: "site",
  twitter: "twitter",
  github: "github",
  linkedIn: "linkedIn",
  telegram: "telegram",
};
export default MiddleDividers;
