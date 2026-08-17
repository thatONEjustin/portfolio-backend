import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsButtons extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'Buttons';
  };
  attributes: {
    File: Schema.Attribute.Media<'files'>;
    isLink: Schema.Attribute.Boolean;
    Label: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface TechStackTechStack extends Struct.ComponentSchema {
  collectionName: 'components_tech_stack_tech_stacks';
  info: {
    displayName: 'Tech Stack';
  };
  attributes: {
    frameworks: Schema.Attribute.Enumeration<
      [
        'tailwindcss',
        'sass',
        'react',
        'astro',
        'alpinejs',
        'jQuery',
        'vue.js',
        'next.js',
        'bootstrap',
        'laravel',
        'angular',
        'Ionic Framework',
        'Craft CMS',
        'Craft Commerce',
        'WordPress',
        'WooCommerce',
        'Shopify',
        'Hydrogen',
      ]
    >;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'buttons.buttons': ButtonsButtons;
      'tech-stack.tech-stack': TechStackTechStack;
    }
  }
}
