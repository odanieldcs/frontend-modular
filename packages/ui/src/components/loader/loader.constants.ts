import type { LoaderSize, LoaderVariant } from "./loader.types";

/**
 * The default visual variant for the Loader component.
 */
export const DEFAULT_LOADER_VARIANT: LoaderVariant = "dots";

/**
 * The default visual size for the Loader component.
 */
export const DEFAULT_LOADER_SIZE: LoaderSize = "medium";

/**
 * The base animation duration for the dots loader.
 */
export const LOADER_DOTS_ANIMATION_DURATION_MS = 2000;

/**
 * The delay for the second dot in the dots loader animation.
 */
export const LOADER_DOTS_DELAY_1_MS = 1500;

/**
 * The delay for the third dot in the dots loader animation.
 */
export const LOADER_DOTS_DELAY_2_MS = 3000;
