import psutil
import time
from flask import Flask, jsonify

app = Flask(__name__)
previous_net_io = None

def get_network_traffic():
    global previous_net_io
    net_io = psutil.net_io_counters()
    if previous_net_io is None:
        previous_net_io = net_io
        return {
            "bytes_sent": 0,
            "bytes_recv": 0,
            "packets_sent": 0,
            "packets_recv": 0
        }
    else:
        bytes_sent = net_io.bytes_sent - previous_net_io.bytes_sent
        bytes_recv = net_io.bytes_recv - previous_net_io.bytes_recv
        packets_sent = net_io.packets_sent - previous_net_io.packets_sent
        packets_recv = net_io.packets_recv - previous_net_io.packets_recv
        previous_net_io = net_io
        return {
            "bytes_sent": bytes_sent,
            "bytes_recv": bytes_recv,
            "packets_sent": packets_sent,
            "packets_recv": packets_recv
        }

@app.route('/', methods=['GET'])
def network_traffic():
    return jsonify(get_network_traffic())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
