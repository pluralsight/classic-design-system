/* eslint-disable */

/// <reference types="react" />

interface Flags {
  [name: string]: boolean | string | number
}

interface Props {
  flags: Flags
}

interface FeatureFlagsContext {
  flags: Flags
}

declare function FeatureFlags<FeatureFlagsContext>(
  props: Props
): React.Provider<FeatureFlagsContext>

declare namespace FeatureFlags {
  var defaultProps: {
    flags: Flags
  }
}

export declare function useFeatureFlags(): React.Context<FeatureFlagsContext>

export default FeatureFlags
