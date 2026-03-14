import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    providerImportSource: null, // 🔑 important
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

export default withMDX(nextConfig);
