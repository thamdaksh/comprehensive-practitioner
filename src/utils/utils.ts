import prettier from "prettier/standalone";
import parserJava from "prettier-plugin-java";

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export async function prettify(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      parser: "java",
      plugins: [parserJava],
    });
  } catch {
    return code;
  }
}