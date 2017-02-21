export default function (kibana) {
    return new kibana.Plugin({
        uiExports: {
            visTypes: [
                'plugins/traffic_signal_vis/traffic_signal_vis'
            ]
        }
    });
};
