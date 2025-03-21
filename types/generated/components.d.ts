import type { Schema, Struct } from '@strapi/strapi';

export interface KrekliVariantsKrekli extends Struct.ComponentSchema {
  collectionName: 'components_krekli_variants_kreklis';
  info: {
    description: '';
    displayName: 'Krekli';
  };
  attributes: {
    colorCode: Schema.Attribute.Text;
    inStock: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    tshirt: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tshirtColorName: Schema.Attribute.Text;
  };
}

export interface VariantsColorVariants extends Struct.ComponentSchema {
  collectionName: 'components_variants_color_variants';
  info: {
    displayName: 'ColorVariants';
  };
  attributes: {
    colorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    colorName: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'krekli-variants.krekli': KrekliVariantsKrekli;
      'variants.color-variants': VariantsColorVariants;
    }
  }
}
