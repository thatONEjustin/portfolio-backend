import type { Schema, Struct } from '@strapi/strapi';

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
      'tech-stack.tech-stack': TechStackTechStack;
    }
  }
}
