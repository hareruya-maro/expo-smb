package expo.modules.smb

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoSmbModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoSmb")

    Function("getTheme") {
      return@Function "system"
    }
  }
}
