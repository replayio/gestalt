// @flow strict
import ActivationCard from '../graphics/general/ActivationCard.svg';
import Avatar from '../graphics/general/Avatar.svg';
import AvatarGroup from '../graphics/general/AvatarGroup.svg';
import Badge from '../graphics/general/Badge.svg';
import Button from '../graphics/general/Button.svg';
import ButtonGroup from '../graphics/general/ButtonGroup.svg';
import Callout from '../graphics/general/Callout.svg';
import Card from '../graphics/general/Card.svg';
import Checkbox from '../graphics/general/Checkbox.svg';
import Collage from '../graphics/general/Collage.svg';
import ComboBox from '../graphics/general/ComboBox.svg';
import Datapoint from '../graphics/general/Datapoint.svg';
import DatePicker from '../graphics/general/DatePicker.svg';
import Divider from '../graphics/general/Divider.svg';
import Dropdown from '../graphics/general/Dropdown.svg';
import RadioGroup from '../graphics/general/RadioGroup.svg';
import Heading from '../graphics/general/Heading.svg';
import IconButton from '../graphics/general/IconButton.svg';
import Icon from '../graphics/general/Icon.svg';
import Image from '../graphics/general/Image.svg';
import GestaltLabel from '../graphics/general/Label.svg';
import GestaltLink from '../graphics/general/Link.svg';
import Masonry from '../graphics/general/Masonry.svg';
import Modal from '../graphics/general/Modal.svg';
import Module from '../graphics/general/Module.svg';
import NumberField from '../graphics/general/NumberField.svg';
import PageHeader from '../graphics/general/PageHeader.svg';
import Popover from '../graphics/general/Popover.svg';
import Pulsar from '../graphics/general/Pulsar.svg';
import SearchField from '../graphics/general/SearchField.svg';
import SegmentedControl from '../graphics/general/SegmentedControl.svg';
import SelectList from '../graphics/general/SelectList.svg';
import SideNavigation from '../graphics/general/SideNavigation.svg';
import Sheet from '../graphics/general/Sheet.svg';
import SlimBanner from '../graphics/general/SlimBanner.svg';
import Spinner from '../graphics/general/Spinner.svg';
import Status from '../graphics/general/Status.svg';
import Switch from '../graphics/general/Switch.svg';
import Table from '../graphics/general/Table.svg';
import Tabs from '../graphics/general/Tabs.svg';
import Tag from '../graphics/general/Tag.svg';
import Text from '../graphics/general/Text.svg';
import TextArea from '../graphics/general/TextArea.svg';
import TextField from '../graphics/general/TextField.svg';
import Toast from '../graphics/general/Toast.svg';
import Tooltip from '../graphics/general/Tooltip.svg';
import Upsell from '../graphics/general/Upsell.svg';
import Video from '../graphics/general/Video.svg';
import Box from '../graphics/building-blocks/Box.svg';
import Column from '../graphics/building-blocks/Column.svg';
import Container from '../graphics/building-blocks/Container.svg';
import Flex from '../graphics/building-blocks/Flex.svg';
import Layer from '../graphics/building-blocks/Layer.svg';
import Letterbox from '../graphics/building-blocks/Letterbox.svg';
import Mask from '../graphics/building-blocks/Mask.svg';
import Pog from '../graphics/building-blocks/Pog.svg';
import ScrollBoundaryContainer from '../graphics/building-blocks/ScrollBoundaryContainer.svg';
import Sticky from '../graphics/building-blocks/Sticky.svg';
import TapArea from '../graphics/building-blocks/TapArea.svg';
import ZIndexClasses from '../graphics/building-blocks/ZIndexClasses.svg';
import HookFocusVisible from '../graphics/utilities/hook-focus-visible.svg';
import HookReducedMotion from '../graphics/utilities/hook-reduced-motion.svg';
import ProviderColorScheme from '../graphics/utilities/provider-color-scheme.svg';
import ProviderOnLinkNavigation from '../graphics/utilities/provider-on-link-navigation.svg';
import Accessibility from '../graphics/foundations/accessibility.svg';
import DataVisualization from '../graphics/foundations/data_visualization.svg';
import Elevation from '../graphics/foundations/elevation.svg';
import Typography from '../graphics/foundations/typography.svg';
import Color from '../graphics/foundations/color.svg';
import DesignTokens from '../graphics/foundations/design-tokens.svg';
import Iconography from '../graphics/foundations/iconography.svg';
import Layouts from '../graphics/foundations/layouts.svg';
import ScreenSizes from '../graphics/foundations/screen-size.svg';
import { type ListItemType } from '../pages/web/overview.js';

const FOUNDATION_GUIDELINES_LIST: Array<ListItemType> = [
  {
    svg: <Accessibility />,
    name: 'Accessibility',
    description:
      'How to create accessible designs and components that contribute to an accessible product',
    category: 'Foundations',
    path: '/foundations/accessibility',
  },
  {
    svg: <Color />,
    name: 'Color',
    description: 'Palettes and guidelines for using color across product interfaces and surfaces',
    category: 'Foundations',
    path: '/foundations/color/palette',
  },
  {
    svg: <DesignTokens />,
    name: 'Design tokens',
    description:
      'An expanded color palette for charts, graphs and other data visualizations. Includes guidelines for accessibility and usage.',
    category: 'Foundations',
    path: '/foundations/design_tokens',
  },
  {
    svg: <DataVisualization />,
    name: 'Data visualization',
    description: 'Data visualization',
    category: 'Foundations',
    path: '/foundations/data_visualization/palette',
  },
  {
    svg: <Elevation />,
    name: 'Elevation',
    description:
      'How and when to lift UI elements from the base surface via color, borders, shadows and other methods',
    category: 'Foundations',
    path: '/foundations/elevation',
  },
  {
    svg: <Typography />,
    name: 'Typography',
    description: 'A typographic system for a content hierarchy that is scannable and efficient',
    category: 'Foundations',
    path: '/foundations/typography/guidelines',
  },
  {
    svg: <Iconography />,
    name: 'Iconography',
    description: 'Our current icon library, complete with guidelines on using and creating icons',
    category: 'Foundations',
    path: '/foundations/iconography/library',
  },
  {
    svg: <Layouts />,
    name: 'Layouts',
    description:
      'How to create accessible designs and components that contribute to an accessible product',
    category: 'Foundations',
    path: '/foundations/layouts',
  },
  {
    svg: <ScreenSizes />,
    name: 'Screen sizes',
    description: 'Responsive breakpoints and screen sizes for desktop, iOS and Android',
    category: 'Foundations',
    path: '/foundations/screen_sizes',
  },
];

const GENERAL_COMPONENT_LIST: Array<ListItemType> = [
  {
    svg: <ActivationCard />,
    name: 'ActivationCard',
    description:
      'ActivationCards are used in groups to communicate a user’s stage in a series of steps toward an overall action.',
    category: 'Messaging',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Avatar />,
    name: 'Avatar',
    description: 'Avatar is used to represent a user.',
    category: 'Avatars',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <AvatarGroup />,
    name: 'AvatarGroup',
    description:
      'AvatarGroup is used to both display a group of user avatars and, optionally, control actions related to the users group.',
    category: 'Avatars',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Badge />,
    name: 'Badge',
    description: 'Badge is a label that indicates status or importance.',
    category: 'Indicators',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Button />,
    name: 'Button',
    description: 'Buttons allow users to perform actions within a surface.',
    category: 'Actions',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'planned',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <ButtonGroup />,
    name: 'ButtonGroup',
    description: 'ButtonGroup is used to display a series of buttons.',
    category: 'Actions',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: null,
        a11yScreenreader: null,
        a11yNavigation: null,
        a11yComprehension: null,
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Callout />,
    name: 'Callout',
    description:
      'Callout is a banner displaying short messages with helpful information for a task on the page, or something that requires the user’s attention.',
    category: 'Messaging',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'planned',
      responsive: 'ready',
    },
  },
  {
    svg: <Card />,
    name: 'Card',
    description: 'Card is used to highlight content in grids.',
    category: 'Structure',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Checkbox />,
    name: 'Checkbox',
    description: 'Use Checkbox when displaying 3 or more toggle inputs.',
    category: 'Controls',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Collage />,
    name: 'Collage',
    description:
      'Collage, similarly to Masonry, creates a deterministic grid layout that can absolutely position and virtualize images.',
    category: 'Pins and imagery',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <ComboBox />,
    name: 'ComboBox',
    description:
      'ComboBox is the combination of a Textfield and an associated Dropdown that allows the user to filter a list when selecting an option.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Datapoint />,
    name: 'Datapoint',
    description: 'Datapoint displays at-a-glance data for a user to quickly view key metrics.',
    category: 'Indicators',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'Pilot',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <DatePicker />,
    name: 'DatePicker',
    description: 'DatePicker is used when the user has to select a date or date range.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Divider />,
    name: 'Divider',
    description:
      'Divider is a light gray 1px horizontal or vertical line which groups and divides content in lists and layouts.',
    category: 'Structure',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Dropdown />,
    name: 'Dropdown',
    description: 'Dropdown displays a list of actions, options or links.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <RadioGroup />,
    name: 'Fieldset',
    description:
      'Fieldset creates a fieldset and legend for a group of related form items in order to clearly indicate related form items.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'Pilot',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Heading />,
    name: 'Heading',
    description:
      'Heading allows you to show headings on the page and has a bigger line height than regular text.',
    category: 'Text',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Icon />,
    name: 'Icon',
    description:
      'Icons are the symbolic representation of an action or information, providing visual context and improving usability.',
    category: 'Pins and imagery',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'planned',
      figma: 'ready',
      responsive: 'ready',
    },
  },

  {
    svg: <IconButton />,
    name: 'IconButton',
    description:
      'IconButton allows users to take actions and make choices with a single click or tap.',
    category: 'Actions',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'planned',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Image />,
    name: 'Image',
    description: 'Image is used to represent images.',
    category: 'Pins and imagery',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <GestaltLabel />,
    name: 'Label',
    description: 'Label is used to connect a label with a form component in an accessible way.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <GestaltLink />,
    name: 'Link',
    description: 'Link allow users to click their way from page to page.',
    category: 'Actions',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Masonry />,
    name: 'Masonry',
    description:
      'Masonry creates a deterministic grid layout, positioning items based on available vertical space.',
    category: 'Pins and imagery',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Modal />,
    name: 'Modal',
    description: 'Modal displays content that requires user interaction.',
    category: 'Overlays',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'partial',
        a11yNavigation: 'partial',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Module />,
    name: 'Module',
    description: 'Module is a container that holds content about one subject.',
    category: 'Structure',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <NumberField />,
    name: 'NumberField',
    description: 'NumberField allows for numerical input.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <PageHeader />,
    name: 'PageHeader',
    description:
      'PageHeader is used to indicate the title of the current page, as well as optional actions.',
    category: 'Structure',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'New',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Popover />,
    name: 'Popover',
    description:
      'Popover is a floating view that contains a task related to the content on screen.',
    category: 'Overlays',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'partial',
        a11yNavigation: 'partial',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Pulsar />,
    name: 'Pulsar',
    description:
      'Pulsars bring focus to a specific element on the screen and act like training wheels to guide people towards the normal way to perform that action.',
    category: 'Loading',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <RadioGroup />,
    name: 'RadioGroup',
    description: 'Use RadioGroup when you have a few options that a user can choose from.',
    category: 'Controls',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'New',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <SearchField />,
    name: 'SearchField',
    description: 'SearchField allows users to search for free-form content.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <SegmentedControl />,
    name: 'SegmentedControl',
    description: 'SegmentedControl may be used to group multiple selections.',
    category: 'Navigation',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'partial',
        a11yNavigation: 'partial',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <SelectList />,
    name: 'SelectList',
    description:
      'SelectList displays a list of actions or options using the browser’s native select.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'partial',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Sheet />,
    name: 'Sheet',
    description:
      'Sheets are surfaces that allow users to view optional information or complete sub-tasks in a workflow while keeping the context of the current page.',
    category: 'Overlays',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'planned',
      responsive: 'ready',
    },
  },
  {
    svg: <Spinner />,
    name: 'Spinner',
    description:
      "Spinner helps indicate that a surface's content or portion of content is currently loading.",
    category: 'Loading',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <SlimBanner />,
    name: 'SlimBanner',
    description: 'SlimBanner conveys brief information related to a specific section of a page.',
    category: 'Messaging',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'New',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <SideNavigation />,
    name: 'SideNavigation',
    description:
      'SideNavigation is start-aligned and arranged vertically. It is used to navigate between page urls or sections when you have too many menu items to fit in horizontal Tabs',
    category: 'Navigation',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'Pilot',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Status />,
    name: 'Status',
    description: "Status is a graphic indicator of an element's state.",
    category: 'Indicators',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: 'Pilot',
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Switch />,
    name: 'Switch',
    description: 'Switch is used for single cell options that can be turned on and off only.',
    category: 'Controls',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Table />,
    name: 'Table',
    description:
      'Table is a set of structured data that is easy for a user to scan, examine, and compare.',
    category: 'Data',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'partial',
        a11yScreenreader: 'partial',
        a11yNavigation: 'partial',
        a11yComprehension: 'partial',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Tabs />,
    name: 'Tabs',
    description: 'Tabs may be used navigate between multiple URLs.',
    category: 'Navigation',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Tag />,
    name: 'Tag',
    description: 'Tags are objects that hold text and have a delete icon to remove them.',
    category: 'Data',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Text />,
    name: 'Text',
    description: 'Text is used for all text on the page.',
    category: 'Text',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <TextArea />,
    name: 'TextArea',
    description: 'TextArea allows for multi-line input.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <TextField />,
    name: 'TextField',
    description: 'TextField allows for multiple types of text input.',
    category: 'Fields and forms',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'planned',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Toast />,
    name: 'Toast',
    description:
      'Toasts educate users on the content of the screen, provide confirmation when people complete an action, or simply communicate a short message.',
    category: 'Messaging',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'partial',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'ready',
      responsive: 'ready',
    },
  },
  {
    svg: <Tooltip />,
    name: 'Tooltip',
    description:
      'Tooltip is a floating text label that succinctly describes the function of an interactive element.',
    category: 'Help and guidance',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Upsell />,
    name: 'Upsell',
    description:
      'Upsells are banners that display short messages that focus on promoting an action or upgrading something the user already has.',
    category: 'Messaging',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
  {
    svg: <Video />,
    name: 'Video',
    description: 'Video is used for media layout.',
    category: 'Pins and imagery',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'planned',
      iOS: 'notAvailable',
      figma: 'partial',
      responsive: 'ready',
    },
  },
];

const BUILDING_BLOCKS_LIST: Array<ListItemType> = [
  {
    svg: <Box />,
    name: 'Box',
    description:
      'Box is a component primitive that can be used to build the foundation of pretty much any other component.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Column />,
    name: 'Column',
    description: 'Column implements a 12-column system.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Container />,
    name: 'Container',
    description: 'Containers are useful in responsively laying out content on different screens.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Flex />,
    name: 'Flex',
    description:
      'Flex is a layout component with a very limited subset of the props available to Box.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Layer />,
    name: 'Layer',
    description: 'Layers allow you to render children outside the DOM hierarchy of the parent.',
    category: 'Building blocks',
    hasDarkBackground: true,
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Letterbox />,
    name: 'Letterbox',
    description:
      'Letterboxes are useful if you have some source media which is larger than the area you want to display it in.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Mask />,
    name: 'Mask',
    description: 'Mask is used to display content in a specific shape.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Pog />,
    name: 'Pog',
    description:
      'Pog is a lower-level functional component to show the active, hovered, and focused states of IconButton.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <ScrollBoundaryContainer />,
    name: 'ScrollBoundaryContainer',
    path: '/web/utilities/scrollboundarycontainer',
    description:
      'ScrollBoundaryContainer is needed for proper positioning when Popover is anchored to an element that is located within a scrolling container.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <Sticky />,
    name: 'Sticky',
    description: 'Sticky allows an element to become fixed when it reaches a threshold.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <TapArea />,
    name: 'TapArea',
    description: 'TapArea allows components to be clickable and touchable in an accessible way.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'ready',
        a11yVisual: 'ready',
        a11yScreenreader: 'ready',
        a11yNavigation: 'ready',
        a11yComprehension: 'ready',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'partial',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <ZIndexClasses />,
    name: 'Z-Index Classes',
    description:
      'FixedZIndex and CompositeZIndex are utility classes that generate z-indices for Gestalt components.',
    category: 'Building blocks',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
];

const FIGMA_ONLY_LIST: Array<ListItemType> = [
  {
    svg: <svg />,
    name: 'BoardRep',
    description: '',
    category: '',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'notAvailable',
      iOS: 'notAvailable',
      figma: 'ready',
      figmaOnly: true,
      responsive: 'notAvailable',
    },
  },
  {
    svg: <svg />,
    name: 'Feed/DiscoveryRep',
    description: '',
    category: 'Pilot',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'notAvailable',
      iOS: 'notAvailable',
      figma: 'ready',
      figmaOnly: true,
      responsive: 'notAvailable',
    },
  },
  {
    svg: <svg />,
    name: 'Pins',
    description: '',
    category: '',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'notAvailable',
      iOS: 'notAvailable',
      figma: 'ready',
      figmaOnly: true,
      responsive: 'notAvailable',
    },
  },
  {
    svg: <svg />,
    name: 'ProfileRep',
    description: '',
    category: '',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'notAvailable',
      iOS: 'notAvailable',
      figma: 'ready',
      figmaOnly: true,
      responsive: 'notAvailable',
    },
  },
];

const UTILITIES_LIST: Array<ListItemType> = [
  {
    svg: <HookFocusVisible />,
    name: 'useFocusVisible',
    path: '/web/utilities/usefocusvisible',
    description:
      'useFocusVisible manages focus interactions on the page and determines whether a focus ring should be shown.',
    category: 'Utilities',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <HookReducedMotion />,
    name: 'useReducedMotion',
    path: '/web/utilities/usereducedmotion',
    description:
      'useReducedMotion allows a user to request that the system minimize the amount of non-essential motion.',
    category: 'Utilities',
    status: {
      accessible: {
        summary: 'partial',
        a11yVisual: 'ready',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <ProviderColorScheme />,
    name: 'ColorSchemeProvider',
    path: '/web/utilities/colorschemeprovider',
    description: 'ColorSchemeProvider is an optional React context provider to enable dark mode.',
    category: 'Utilities',
    hasDarkBackground: true,
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
  {
    svg: <ProviderOnLinkNavigation />,
    name: 'OnLinkNavigationProvider',
    path: '/web/utilities/onlinknavigationprovider',
    description:
      'OnLinkNavigationProvider is a React context provider to externally control the link behavior of components further down the tree.',
    category: 'Utilities',
    status: {
      accessible: {
        summary: 'notAvailable',
        a11yVisual: 'notAvailable',
        a11yScreenreader: 'notAvailable',
        a11yNavigation: 'notAvailable',
        a11yComprehension: 'notAvailable',
      },
      badge: null,
      android: 'notAvailable',
      deprecated: false,
      documentation: 'ready',
      iOS: 'notAvailable',
      figma: 'notAvailable',
      responsive: 'ready',
    },
  },
];

const COMPONENT_DATA_MAP: {|
  buildingBlockComponents: Array<ListItemType>,
  generalComponents: Array<ListItemType>,
  utilityComponents: Array<ListItemType>,
  figmaOnlyComponents: Array<ListItemType>,
  foundations: Array<ListItemType>,
|} = {
  buildingBlockComponents: BUILDING_BLOCKS_LIST,
  generalComponents: GENERAL_COMPONENT_LIST,
  utilityComponents: UTILITIES_LIST,
  figmaOnlyComponents: FIGMA_ONLY_LIST,
  foundations: FOUNDATION_GUIDELINES_LIST,
};

export default COMPONENT_DATA_MAP;
