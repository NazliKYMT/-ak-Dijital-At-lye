import type { Tool, QuickLink } from './types';
import { OrganizationChartIcon } from './components/icons/OrganizationChartIcon';
import { ImageEditIcon } from './components/icons/ImageEditIcon';
import { SpeechToTextIcon } from './components/icons/SpeechToTextIcon';
import { CodeGeneratorIcon } from './components/icons/CodeGeneratorIcon';
import { DataVisualizationIcon } from './components/icons/DataVisualizationIcon';
import { DocumentScannerIcon } from './components/icons/DocumentScannerIcon';
import { MailIcon } from './components/icons/MailIcon';
import { GraduationCapIcon } from './components/icons/GraduationCapIcon';
import { BookOpenIcon } from './components/icons/BookOpenIcon';


export const TOOLS_DATA: Tool[] = [
  {
    id: 'org-chart',
    title: 'Teşkilat Şeması',
    subtitle: 'Oluşturucu',
    icon: OrganizationChartIcon,
    link: '#',
  },
  {
    id: 'image-editor',
    title: 'Resim',
    subtitle: 'Düzenleyici',
    icon: ImageEditIcon,
    link: '#',
  },
  {
    id: 'speech-to-text',
    title: 'Konuşarak Metin',
    subtitle: 'Oluşturucu',
    icon: SpeechToTextIcon,
    link: '#',
  },
  {
    id: 'code-generator',
    title: 'Kod Oluşturucu',
    subtitle: 'Asistan',
    icon: CodeGeneratorIcon,
    link: '#',
  },
  {
    id: 'data-visualization',
    title: 'Veri Görselleştirme',
    subtitle: 'Aracı',
    icon: DataVisualizationIcon,
    link: '#',
  },
  {
    id: 'document-scanner',
    title: 'Belge Tarayıcı',
    subtitle: 'Dijitalleştirme',
    icon: DocumentScannerIcon,
    link: '#',
  },
];

export const QUICK_LINKS: QuickLink[] = [
    {
        id: 'webmail',
        title: 'Webmail',
        icon: MailIcon,
        link: 'https://webmail.karatekin.edu.tr/',
    },
    {
        id: 'ubs',
        title: 'UBS',
        icon: GraduationCapIcon,
        link: 'https://ubs.karatekin.edu.tr/',
    },
    {
        id: 'library',
        title: 'Kütüphane',
        icon: BookOpenIcon,
        link: 'https://kutuphane.karatekin.edu.tr/',
    }
];