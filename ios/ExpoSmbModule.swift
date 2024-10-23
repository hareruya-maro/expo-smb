import ExpoModulesCore

public class ExpoSmbModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoSmb")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}
