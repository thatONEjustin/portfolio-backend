import type { Schema, Struct } from '@strapi/strapi';

export interface TechStackTechStack extends Struct.ComponentSchema {
  collectionName: 'components_tech_stack_tech_stacks';
  info: {
    displayName: 'Tech Stack';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tech-stack.tech-stack': TechStackTechStack;
    }
  }
}
