import { createFileRoute } from '@tanstack/react-router';
import { Box, Typography, Container, Link as MuiLink, List, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Hauptkomponente für die Datenschutzerklärung
function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const accentColor = 'rgba(21, 120, 102, 1)';
  const orbitron = "'Orbitron', sans-serif";

  return (
    <Container sx={{ color: 'white', py: 10 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          hyphens: 'auto',
          fontFamily: orbitron,
          color: accentColor,
          fontWeight: 'bold',
          mb: 4,
        }}>
        {t('privacy-page.title')}
      </Typography>

      {/* Präambel */}
      <Section id="m716" title={t('privacy-page.preamble-title')} component="h2">
        <Paragraph>{t('privacy-page.preamble.p1')}</Paragraph>
        <Paragraph>{t('privacy-page.preamble.p2')}</Paragraph>
        <Paragraph>{t('privacy-page.preamble.p3')}</Paragraph>
      </Section>

      {/* Inhaltsübersicht */}
      <Section title={t('privacy-page.toc-title')} component="h2">
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m716" color="inherit">
              {t('privacy-page.preamble-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m3" color="inherit">
              {t('privacy-page.responsible-person-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#mOverview" color="inherit">
              {t('privacy-page.processing-oparations-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m2427" color="inherit">
              {t('privacy-page.legal-base-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m27" color="inherit">
              {t('privacy-page.safety-measures-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m25" color="inherit">
              {t('privacy-page.transfer-data-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m12" color="inherit">
              {t('privacy-page.general-storage-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m10" color="inherit">
              {t('privacy-page.rights-data-subjects-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m225" color="inherit">
              {t('privacy-page.services-hosting-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m182" color="inherit">
              {t('privacy-page.contact-managment-title')}
            </MuiLink>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <MuiLink href="#m15" color="inherit">
              {t('privacy-page.mod-update-title')}
            </MuiLink>
          </ListItem>
        </List>
      </Section>

      {/* Verantwortlicher */}
      <Section id="m3" title={t('privacy-page.responsible-person-title')} component="h2">
        <Typography variant="body1" sx={{ color: 'white' }}>
          Marco Loch
          <br />
          Ingersheimer Hauptstraße 1,
          <br />
          74564 Crailsheim
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mt: 1 }}>
          E-Mail:{' '}
          <MuiLink href="mailto:cn_macro@web.de" color={accentColor}>
            cn_macro@web.de
          </MuiLink>
        </Typography>
      </Section>

      {/* Übersicht der Verarbeitungen */}
      <Section id="mOverview" title={t('privacy-page.processing-oparations-title')} component="h2">
        <Paragraph>{t('privacy-page.processing-operations.p1')}</Paragraph>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.processing-operations.p2')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l1')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l2')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l3')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l4')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l5')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l6')}</ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.processing-operations.p3')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l7')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l8')}</ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.processing-operations.p4')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l9')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l10')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l11')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l12')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l13')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.processing-operations.list.l14')}</ListItem>
        </List>
      </Section>

      {/* Maßgebliche Rechtsgrundlagen */}
      <Section id="m2427" title={t('privacy-page.legal-base-title')} component="h2">
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.legal-base.p1')}
        </Typography>
        <Paragraph>{t('privacy-page.legal-base.p2')}</Paragraph>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.legal-base.list.strong1')}</strong>
            {t('privacy-page.legal-base.list.l1')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.legal-base.list.strong2')}</strong>
            {t('privacy-page.legal-base.list.l2')}
          </ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.legal-base.p3')}
        </Typography>
        <Paragraph>{t('privacy-page.legal-base.p4')}</Paragraph>
      </Section>

      {/* Sicherheitsmaßnahmen */}
      <Section id="m27" title={t('privacy-page.safety-measures-title')} component="h2">
        <Paragraph>{t('privacy-page.safety-measures.p1')}</Paragraph>
        <Paragraph>{t('privacy-page.safety-measures.p2')}</Paragraph>
        <Paragraph>{t('privacy-page.safety-measures.p3')}</Paragraph>
      </Section>

      {/* Übermittlung von personenbezogenen Daten */}
      <Section id="m25" title={t('privacy-page.transfer-data-title')} component="h2">
        <Paragraph>{t('privacy-page.transfer-data.p1')}</Paragraph>
      </Section>

      {/* Allgemeine Informationen zur Datenspeicherung und Löschung */}
      <Section id="m12" title={t('privacy-page.general-storage-title')} component="h2">
        <Paragraph>{t('privacy-page.general-storage.p1')}</Paragraph>
        <Paragraph>{t('privacy-page.general-storage.p2')}</Paragraph>
        <Paragraph>{t('privacy-page.general-storage.p3')}</Paragraph>
        <Paragraph>{t('privacy-page.general-storage.p4')}</Paragraph>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.general-storage.p5')}
        </Typography>
        <Paragraph>{t('privacy-page.general-storage.p6')}</Paragraph>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.general-storage.list.l1')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.general-storage.list.l2')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.general-storage.list.l3')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.general-storage.list.l4')}</ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.general-storage.p7')}
        </Typography>
        <Paragraph>{t('privacy-page.general-storage.p8')}</Paragraph>
      </Section>

      {/* Rechte der betroffenen Personen */}
      <Section id="m10" title={t('privacy-page.rights-data-subjects-title')} component="h2">
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.rights-data-subjects.p1')}
        </Typography>
        <Paragraph>{t('privacy-page.rights-data-subjects.p2')}</Paragraph>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl1')}</strong>
            {t('privacy-page.rights-data-subjects.list.l1')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl2')}</strong>
            {t('privacy-page.rights-data-subjects.list.l2')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl3')}</strong>
            {t('privacy-page.rights-data-subjects.list.l3')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl4')}</strong>
            {t('privacy-page.rights-data-subjects.list.l4')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl5')}</strong>
            {t('privacy-page.rights-data-subjects.list.l5')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl6')}</strong>
            {t('privacy-page.rights-data-subjects.list.l6')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.rights-data-subjects.list.sl7')}</strong>
            {t('privacy-page.rights-data-subjects.list.l7')}
          </ListItem>
        </List>
      </Section>

      {/* Bereitstellung des Onlineangebots und Webhosting */}
      <Section id="m225" title={t('privacy-page.services-hosting-title')} component="h2">
        <Paragraph>{t('privacy-page.services-hosting.p1')}</Paragraph>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.services-hosting.p2')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.services-hosting.list.l1')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.services-hosting.list.l2')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.services-hosting.list.l3')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.services-hosting.list.l4')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.services-hosting.list.l5')}</ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.services-hosting.p3')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.services-hosting.list.sl1')}</strong>
            {t('privacy-page.services-hosting.list.l6')}
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.services-hosting.list.sl2')}</strong>
            {t('privacy-page.services-hosting.list.l7')}
          </ListItem>
        </List>
      </Section>

      {/* Kontakt- und Anfrageverwaltung */}
      <Section id="m182" title={t('privacy-page.contact-managment-title')} component="h2">
        <Paragraph>{t('privacy-page.contact-managment.p1')}</Paragraph>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.contact-managment.p2')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.contact-managment.list.l1')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.contact-managment.list.l2')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.contact-managment.list.l3')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.contact-managment.list.l4')}</ListItem>
          <ListItem sx={{ display: 'list-item' }}>{t('privacy-page.contact-managment.list.l5')}</ListItem>
        </List>
        <Typography variant="h6" sx={{ color: 'white', mt: 2, fontWeight: 'bold' }}>
          {t('privacy-page.contact-managment.p3')}
        </Typography>
        <List sx={{ color: 'white', listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>{t('privacy-page.contact-managment.list.sl1')}</strong>
            {t('privacy-page.contact-managment.list.l6')}
          </ListItem>
        </List>
      </Section>

      {/* Änderung und Aktualisierung */}
      <Section id="m15" title={t('privacy-page.mod-update-title')} component="h2">
        <Paragraph>{t('privacy-page.mod-update.p1')}</Paragraph>
        <Paragraph>{t('privacy-page.mod-update.p2')}</Paragraph>
      </Section>

      {/* Externer Link zum Generator */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <MuiLink
          href="https://datenschutz-generator.de/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          sx={{ color: accentColor }}>
          <Typography variant="body2" sx={{ fontFamily: orbitron }}>
            {t('privacy-page.external-link')}
          </Typography>
        </MuiLink>
      </Box>
    </Container>
  );
}

// Interne Komponente zur Formatierung der Abschnitte
const Section = ({
  id,
  title,
  component = 'h2',
  children,
}: {
  id?: string;
  title: string;
  component?: 'h2' | 'h3';
  children: React.ReactNode;
}) => (
  <Box id={id} component="section" sx={{ mb: 4, mt: 4 }}>
    <Typography
      variant={component === 'h2' ? 'h4' : 'h5'}
      component={component}
      sx={{
        fontFamily: "'Orbitron', sans-serif",
        color: 'rgba(21, 120, 102, 1)',
        fontWeight: 'bold',
        mb: 2,
      }}>
      {title}
    </Typography>
    {children}
  </Box>
);

// Interne Komponente für Absätze
const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
    {children}
  </Typography>
);

export const Route = createFileRoute('/privacy_policy')({
  component: PrivacyPolicyPage,
});
