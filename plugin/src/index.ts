import {
  ConfigPlugin,
  IOSConfig,
  withXcodeProject,
} from "@expo/config-plugins";

const withMyApiKey: ConfigPlugin = (config) => {
  withXcodeProject(config, async (config) => {
    const project = config.modResults;

    const { Target } = IOSConfig;
    const targetBuildConfigListIds = Target.getNativeTargets(project)
      .filter(([_, target]) =>
        Target.isTargetOfType(target, Target.TargetType.APPLICATION)
      )
      .map(([_, target]) => target.buildConfigurationList);

    for (const buildConfigListId of targetBuildConfigListIds) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [
        _,
        configurations,
      ] of IOSConfig.XcodeUtils.getBuildConfigurationsForListId(
        project,
        buildConfigListId
      )) {
        const { buildSettings } = configurations;
        if (buildSettings) {
          // buildSettings['"EXCLUDED_ARCHS[sdk=iphonesimulator*]"'] = "arm64";
        }
      }
    }
    return config;
  });
  return config;
};

export default withMyApiKey;
