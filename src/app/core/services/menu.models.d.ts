import { AuthState } from '@core/auth/auth.models';
export declare type MenuSectionType = 'link' | 'toggle';
export interface MenuSection {
    id: MenuId | string;
    name: string;
    fullName?: string;
    type: MenuSectionType;
    path: string;
    icon: string;
    pages?: Array<MenuSection>;
    opened?: boolean;
    rootOnly?: boolean;
    customTranslate?: boolean;
}
export interface MenuReference {
    id: MenuId;
    pages?: Array<MenuReference>;
}
export interface HomeSectionReference {
    name: string;
    places: Array<MenuId>;
}
export interface HomeSection {
    name: string;
    places: Array<MenuSection>;
}
export declare enum MenuId {
    home = "home",
    tenants = "tenants",
    tenant_profiles = "tenant_profiles",
    resources = "resources",
    widget_library = "widget_library",
    widget_types = "widget_types",
    widgets_bundles = "widgets_bundles",
    images = "images",
    scada_symbols = "scada_symbols",
    resources_library = "resources_library",
    javascript_library = "javascript_library",
    notifications_center = "notifications_center",
    notification_inbox = "notification_inbox",
    notification_sent = "notification_sent",
    notification_recipients = "notification_recipients",
    notification_templates = "notification_templates",
    notification_rules = "notification_rules",
    mobile_center = "mobile_center",
    mobile_apps = "mobile_apps",
    mobile_bundles = "mobile_bundles",
    mobile_qr_code_widget = "mobile_qr_code_widget",
    settings = "settings",
    general = "general",
    mail_server = "mail_server",
    home_settings = "home_settings",
    notification_settings = "notification_settings",
    repository_settings = "repository_settings",
    auto_commit_settings = "auto_commit_settings",
    queues = "queues",
    security_settings = "security_settings",
    security_settings_general = "security_settings_general",
    two_fa = "two_fa",
    oauth2 = "oauth2",
    domains = "domains",
    clients = "clients",
    audit_log = "audit_log",
    alarms_center = "alarms_center",
    alarms = "alarms",
    alarm_rules = "alarm_rules",
    dashboards = "dashboards",
    entities = "entities",
    devices = "devices",
    assets = "assets",
    entity_views = "entity_views",
    gateways = "gateways",
    profiles = "profiles",
    device_profiles = "device_profiles",
    asset_profiles = "asset_profiles",
    customers = "customers",
    calculated_fields = "calculated_fields",
    rule_chains = "rule_chains",
    edge_management = "edge_management",
    edges = "edges",
    edge_instances = "edge_instances",
    rulechain_templates = "rulechain_templates",
    features = "features",
    otaUpdates = "otaUpdates",
    version_control = "version_control",
    api_usage = "api_usage",
    trendz_settings = "trendz_settings",
    ai_models = "ai_models"
}
export declare const menuSectionMap: Map<MenuId, MenuSection>;
export declare const buildUserMenu: (authState: AuthState) => Array<MenuSection>;
export declare const buildUserHome: (authState: AuthState, availableMenuSections: MenuSection[]) => Array<HomeSection>;
