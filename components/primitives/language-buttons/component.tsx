import { Languages } from '@enums';
import { Button, ButtonGroup } from '@mui/material';
import { useRouter } from 'next/router';

const languages = [
  { text: 'En', locale: Languages.EN },
  { text: 'Ua', locale: Languages.UA },
];

export default function LanguageButtons() {
  const { push, asPath, locale } = useRouter();

  return (
    <ButtonGroup variant="contained" size="small" color="primary">
      {languages.map((lang) => (
        <Button
          disabled={locale === lang.locale}
          onClick={() => push(asPath, asPath, { locale: lang.locale })}
          key={lang.locale}
        >
          {lang.text}
        </Button>
      ))}
    </ButtonGroup>
  );
}
