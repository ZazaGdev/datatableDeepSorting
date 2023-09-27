let diagramData = {
    ID: '23998',
    GUID: '7b1280d7-7f71-4a27-aaa9-eae87a1adf74',
    SnapshotName: 'Accounting Services',
    SnapshotDescription: null,
    Steps: [
        {
            ID: 'bpmn-5e07c9af-0d8c-494a-afd2-2a6eec5f0884',
            Number: 1,
            Name: 'Start',
            Type: '',
            ResourceName: 'Client',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-c2c901c2-9351-4af9-b6c8-e2a88508b50a',
                    Name: '(To Submit request)',
                    Target: 'bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46',
            Number: 2,
            Name: 'Submit request',
            Type: 'Activity',
            ResourceName: 'Client',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-dfb60572-3cc6-4341-ab33-f63700f3f0e3',
                    Name: '(To New client?)',
                    Target: 'bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f',
            Number: 3,
            Name: 'New client?',
            Type: 'Exclusive Gateway',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-b3a637c3-063c-4965-871d-3251044c6a4f',
                    Name: '(To Register)',
                    Target: 'bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f',
                    Probability: 50,
                    IsLoop: false,
                },
                {
                    ID: 'bpmn-998e58ad-e0e4-4f23-be1e-3a8c7cb579f5',
                    Name: '(To Add data)',
                    Target: 'bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f',
            Number: 4,
            Name: 'Register',
            Type: 'Activity',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-ed31c813-4d0d-452c-acac-dac08631731b',
                    Name: '(To Determine client account info)',
                    Target: 'bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243',
            Number: 5,
            Name: 'Determine client account info',
            Type: 'Activity',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-929d07bc-5e0f-459d-8724-a4e5cd035313',
                    Name: '(To Explain data entry procedures)',
                    Target: 'bpmn-bcbb288a-845d-4711-838c-550bdd11fb62',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-bcbb288a-845d-4711-838c-550bdd11fb62',
            Number: 6,
            Name: 'Explain data entry procedures',
            Type: 'Activity',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-f2b53a4b-f149-49f6-a9cd-2b40e8383945',
                    Name: '(To Add data)',
                    Target: 'bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7',
            Number: 7,
            Name: 'Add data',
            Type: 'Activity',
            ResourceName: 'Client',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-515ca2f0-f1c0-4e75-827c-dd4d0adf633c',
                    Name: '(To Review)',
                    Target: 'bpmn-d386ecd0-8e84-43c4-b88e-23235082602c',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-d386ecd0-8e84-43c4-b88e-23235082602c',
            Number: 8,
            Name: 'Review',
            Type: 'Activity',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-92f62377-b8db-4e86-9726-9e8ebabe1faa',
                    Name: '(To Revision needed?)',
                    Target: 'bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32',
            Number: 9,
            Name: 'Revision needed?',
            Type: 'Exclusive Gateway',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-7d2ace80-9fcf-4362-adb3-2585aa11f4bc',
                    Name: '(To Email revisions)',
                    Target: 'bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb',
                    Probability: 50,
                    IsLoop: false,
                },
                {
                    ID: 'bpmn-87fea321-e9d4-48ef-a50f-d8a1d35ba447',
                    Name: '(To Provide services)',
                    Target: 'bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb',
            Number: 10,
            Name: 'Email revisions',
            Type: 'Activity',
            ResourceName: 'Client',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-86e24981-a88f-448f-a076-c23dd5412d49',
                    Name: '(To Approve?)',
                    Target: 'bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e',
            Number: 11,
            Name: 'Approve?',
            Type: 'Exclusive Gateway',
            ResourceName: 'Client',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-e22a5334-45a0-4322-92cd-0355e8a84de2',
                    Name: '(To Provide services)',
                    Target: 'bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f',
                    Probability: 50,
                    IsLoop: false,
                },
                {
                    ID: 'bpmn-fb44cd9f-5040-490c-b3b8-2d741869bc2e',
                    Name: '(To Add data)',
                    Target: 'bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7',
                    Probability: 50,
                    IsLoop: true,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f',
            Number: 12,
            Name: 'Provide services',
            Type: 'Activity',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [
                {
                    ID: 'bpmn-88c8645f-37f8-4811-aa04-b9f48accebe6',
                    Name: '(To End)',
                    Target: 'bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c',
                    Probability: 50,
                    IsLoop: false,
                },
            ],
            GatewayDirection: null,
            Counter: 0,
        },
        {
            ID: 'bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c',
            Number: 13,
            Name: 'End',
            Type: 'End Event',
            ResourceName: 'Certified Public Accountant',
            ImprovementType: null,
            NumberOfResources: 0,
            Measurements: [],
            Properties: [],
            NextSteps: [],
            GatewayDirection: null,
            Counter: 0,
        },
    ],
    Resources: [
        {
            ID: 'bpmn-a0e9905b-4669-416d-a378-b80acd97fa02',
            Name: 'Client',
            Number: 1,
            Cost: 0,
            CostUnit: 'Hour',
            ModalSchedules: 'BkprZyF2s2YB',
            IsUnderSchedule: true,
            CostPerMinute: 0,
        },
        {
            ID: 'bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b',
            Name: 'Certified Public Accountant',
            Number: 1,
            Cost: 0,
            CostUnit: 'Hour',
            ModalSchedules: 'BkprZyF2s2YB',
            IsUnderSchedule: true,
            CostPerMinute: 0,
        },
    ],
    SimulationCount: 100,
    BPMN: '<?xml version="1.0" encoding="utf-8"?>\r\n<bpmn:definitions xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL">\r\n  <bpmn:process id="bpmn-6ac7d7f7-0f74-47d3-814d-dcebe6a1f469" name="Accounting Services" processType="Private" isExecutable="false">\r\n    <bpmn:laneSet>\r\n      <bpmn:lane id="bpmn-a0e9905b-4669-416d-a378-b80acd97fa02" name="Client">\r\n        <bpmn:flowNodeRef>bpmn-5e07c9af-0d8c-494a-afd2-2a6eec5f0884</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e</bpmn:flowNodeRef>\r\n      </bpmn:lane>\r\n      <bpmn:lane id="bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b" name="Certified Public Accountant">\r\n        <bpmn:flowNodeRef>bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-bcbb288a-845d-4711-838c-550bdd11fb62</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-d386ecd0-8e84-43c4-b88e-23235082602c</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f</bpmn:flowNodeRef>\r\n        <bpmn:flowNodeRef>bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c</bpmn:flowNodeRef>\r\n      </bpmn:lane>\r\n    </bpmn:laneSet>\r\n    <bpmn:sequenceFlow id="bpmn-c2c901c2-9351-4af9-b6c8-e2a88508b50a" targetRef="bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46" sourceRef="bpmn-5e07c9af-0d8c-494a-afd2-2a6eec5f0884" />\r\n    <bpmn:sequenceFlow id="bpmn-dfb60572-3cc6-4341-ab33-f63700f3f0e3" targetRef="bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f" sourceRef="bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46" />\r\n    <bpmn:sequenceFlow id="bpmn-b3a637c3-063c-4965-871d-3251044c6a4f" targetRef="bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f" sourceRef="bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f" />\r\n    <bpmn:sequenceFlow id="bpmn-ed31c813-4d0d-452c-acac-dac08631731b" targetRef="bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243" sourceRef="bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f" />\r\n    <bpmn:sequenceFlow id="bpmn-929d07bc-5e0f-459d-8724-a4e5cd035313" targetRef="bpmn-bcbb288a-845d-4711-838c-550bdd11fb62" sourceRef="bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243" />\r\n    <bpmn:sequenceFlow id="bpmn-998e58ad-e0e4-4f23-be1e-3a8c7cb579f5" targetRef="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" sourceRef="bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f" />\r\n    <bpmn:sequenceFlow id="bpmn-515ca2f0-f1c0-4e75-827c-dd4d0adf633c" targetRef="bpmn-d386ecd0-8e84-43c4-b88e-23235082602c" sourceRef="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" />\r\n    <bpmn:sequenceFlow id="bpmn-92f62377-b8db-4e86-9726-9e8ebabe1faa" targetRef="bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32" sourceRef="bpmn-d386ecd0-8e84-43c4-b88e-23235082602c" />\r\n    <bpmn:sequenceFlow id="bpmn-7d2ace80-9fcf-4362-adb3-2585aa11f4bc" targetRef="bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb" sourceRef="bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32" />\r\n    <bpmn:sequenceFlow id="bpmn-86e24981-a88f-448f-a076-c23dd5412d49" targetRef="bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e" sourceRef="bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb" />\r\n    <bpmn:sequenceFlow id="bpmn-87fea321-e9d4-48ef-a50f-d8a1d35ba447" targetRef="bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f" sourceRef="bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32" />\r\n    <bpmn:sequenceFlow id="bpmn-88c8645f-37f8-4811-aa04-b9f48accebe6" targetRef="bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c" sourceRef="bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f" />\r\n    <bpmn:sequenceFlow id="bpmn-f2b53a4b-f149-49f6-a9cd-2b40e8383945" targetRef="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" sourceRef="bpmn-bcbb288a-845d-4711-838c-550bdd11fb62" />\r\n    <bpmn:sequenceFlow id="bpmn-e22a5334-45a0-4322-92cd-0355e8a84de2" targetRef="bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f" sourceRef="bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e" />\r\n    <bpmn:sequenceFlow id="bpmn-fb44cd9f-5040-490c-b3b8-2d741869bc2e" targetRef="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" sourceRef="bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e" />\r\n    <bpmn:startEvent id="bpmn-5e07c9af-0d8c-494a-afd2-2a6eec5f0884" name="Start" isExecutable="false">\r\n      <bpmn:performer id="bpmn-e6dc4bf4-60e6-4f01-a92c-7538b94591c1" name="Client" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-a0e9905b-4669-416d-a378-b80acd97fa02</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:startEvent>\r\n    <bpmn:endEvent id="bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c" name="End" isExecutable="false">\r\n      <bpmn:performer id="bpmn-387ba31e-a81d-4390-b60e-4f3cbe583699" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:endEvent>\r\n    <bpmn:exclusiveGateway id="bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f" name="New client?" isExecutable="false">\r\n      <bpmn:performer id="bpmn-205b1dd7-0eb7-46a2-9927-bf7a2be12ec3" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:exclusiveGateway>\r\n    <bpmn:exclusiveGateway id="bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32" name="Revision needed?" isExecutable="false">\r\n      <bpmn:performer id="bpmn-ef434695-365c-42a3-b62a-dd87adc144c5" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:exclusiveGateway>\r\n    <bpmn:exclusiveGateway id="bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e" name="Approve?" isExecutable="false">\r\n      <bpmn:performer id="bpmn-3a2a1253-1323-4b9a-8802-3fa658f93cf1" name="Client" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-a0e9905b-4669-416d-a378-b80acd97fa02</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:exclusiveGateway>\r\n    <bpmn:userTask id="bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46" name="Submit request" isExecutable="false">\r\n      <bpmn:performer id="bpmn-543a0bbf-17b2-46c9-ace2-49db947fbb86" name="Client" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-a0e9905b-4669-416d-a378-b80acd97fa02</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f" name="Register" isExecutable="false">\r\n      <bpmn:performer id="bpmn-e35be0cc-1c1e-4f5f-a8ba-3b7f7d86a65b" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243" name="Determine client account info" isExecutable="false">\r\n      <bpmn:performer id="bpmn-ffb97d27-ec06-4d99-a444-16372da9ac26" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-bcbb288a-845d-4711-838c-550bdd11fb62" name="Explain data entry procedures" isExecutable="false">\r\n      <bpmn:performer id="bpmn-52f5daec-0d2a-442e-8cf4-22bdb1b38881" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" name="Add data" isExecutable="false">\r\n      <bpmn:performer id="bpmn-d1a0c9cc-f421-4c67-bf5a-7e1fa9d48a36" name="Client" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-a0e9905b-4669-416d-a378-b80acd97fa02</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-d386ecd0-8e84-43c4-b88e-23235082602c" name="Review" isExecutable="false">\r\n      <bpmn:performer id="bpmn-6c28379a-2826-4fbc-9963-8a9ca7fef1d2" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb" name="Email revisions" isExecutable="false">\r\n      <bpmn:performer id="bpmn-a8560abc-1fb6-4e35-a08e-f4a8d0aeb6d3" name="Client" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-a0e9905b-4669-416d-a378-b80acd97fa02</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n    <bpmn:userTask id="bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f" name="Provide services" isExecutable="false">\r\n      <bpmn:performer id="bpmn-f59474e6-ae8a-41ec-9dc8-57e61ba8c229" name="Certified Public Accountant" isExecutable="false">\r\n        <bpmn:resourceRef>res:bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b</bpmn:resourceRef>\r\n        <bpmn:laneSet />\r\n      </bpmn:performer>\r\n      <bpmn:laneSet />\r\n    </bpmn:userTask>\r\n  </bpmn:process>\r\n  <bpmndi:BPMNDiagram id="bpmn-35254795-e229-4e64-bdeb-af4220ecd9b6">\r\n    <bpmndi:BPMNPlane>\r\n      <bpmndi:BPMNEdge id="Edge_0" bpmnElement="bpmn-c2c901c2-9351-4af9-b6c8-e2a88508b50a">\r\n        <di:waypoint x="136.0" y="128.0" />\r\n        <di:waypoint x="168.0" y="128.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_1" bpmnElement="bpmn-dfb60572-3cc6-4341-ab33-f63700f3f0e3">\r\n        <di:waypoint x="216.0" y="160.0" />\r\n        <di:waypoint x="216.0" y="232.0" />\r\n        <di:waypoint x="328.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_2" bpmnElement="bpmn-b3a637c3-063c-4965-871d-3251044c6a4f">\r\n        <di:waypoint x="360.0" y="232.0" />\r\n        <di:waypoint x="440.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_3" bpmnElement="bpmn-ed31c813-4d0d-452c-acac-dac08631731b">\r\n        <di:waypoint x="536.0" y="232.0" />\r\n        <di:waypoint x="568.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_4" bpmnElement="bpmn-929d07bc-5e0f-459d-8724-a4e5cd035313">\r\n        <di:waypoint x="664.0" y="232.0" />\r\n        <di:waypoint x="696.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_5" bpmnElement="bpmn-998e58ad-e0e4-4f23-be1e-3a8c7cb579f5">\r\n        <di:waypoint x="344.0" y="216.0" />\r\n        <di:waypoint x="344.0" y="160.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_6" bpmnElement="bpmn-515ca2f0-f1c0-4e75-827c-dd4d0adf633c">\r\n        <di:waypoint x="392.0" y="128.0" />\r\n        <di:waypoint x="872.0" y="128.0" />\r\n        <di:waypoint x="872.0" y="208.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_7" bpmnElement="bpmn-92f62377-b8db-4e86-9726-9e8ebabe1faa">\r\n        <di:waypoint x="920.0" y="232.0" />\r\n        <di:waypoint x="984.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_8" bpmnElement="bpmn-7d2ace80-9fcf-4362-adb3-2585aa11f4bc">\r\n        <di:waypoint x="1000.0" y="216.0" />\r\n        <di:waypoint x="1000.0" y="160.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_9" bpmnElement="bpmn-86e24981-a88f-448f-a076-c23dd5412d49">\r\n        <di:waypoint x="1000.0" y="104.0" />\r\n        <di:waypoint x="1000.0" y="56.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_10" bpmnElement="bpmn-87fea321-e9d4-48ef-a50f-d8a1d35ba447">\r\n        <di:waypoint x="1016.0" y="232.0" />\r\n        <di:waypoint x="1096.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_11" bpmnElement="bpmn-88c8645f-37f8-4811-aa04-b9f48accebe6">\r\n        <di:waypoint x="1192.0" y="232.0" />\r\n        <di:waypoint x="1224.0" y="232.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_12" bpmnElement="bpmn-f2b53a4b-f149-49f6-a9cd-2b40e8383945">\r\n        <di:waypoint x="744.0" y="208.0" />\r\n        <di:waypoint x="744.0" y="144.0" />\r\n        <di:waypoint x="392.0" y="144.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_13" bpmnElement="bpmn-e22a5334-45a0-4322-92cd-0355e8a84de2">\r\n        <di:waypoint x="1016.0" y="40.0" />\r\n        <di:waypoint x="1144.0" y="40.0" />\r\n        <di:waypoint x="1144.0" y="208.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNEdge id="Edge_14" bpmnElement="bpmn-fb44cd9f-5040-490c-b3b8-2d741869bc2e">\r\n        <di:waypoint x="984.0" y="40.0" />\r\n        <di:waypoint x="344.0" y="40.0" />\r\n        <di:waypoint x="344.0" y="104.0" />\r\n      </bpmndi:BPMNEdge>\r\n      <bpmndi:BPMNShape id="Shape_0" bpmnElement="bpmn-5e07c9af-0d8c-494a-afd2-2a6eec5f0884" isHorizontal="false">\r\n        <dc:Bounds x="114.0" y="116.0" height="24.0" width="24.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_1" bpmnElement="bpmn-f7d307a7-e2c1-4214-8a26-648253ce3a46" isHorizontal="false">\r\n        <dc:Bounds x="168.0" y="104.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_2" bpmnElement="bpmn-c6fd7f36-a049-48ea-86c2-31e89b54bc9f" isHorizontal="false">\r\n        <dc:Bounds x="328.0" y="216.0" height="32.0" width="32.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_3" bpmnElement="bpmn-0c907f70-b5c2-4af0-9327-2fa91001059f" isHorizontal="false">\r\n        <dc:Bounds x="440.0" y="208.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_4" bpmnElement="bpmn-deddc539-65d9-4183-82a8-1ffe57ed3243" isHorizontal="false">\r\n        <dc:Bounds x="568.0" y="208.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_5" bpmnElement="bpmn-bcbb288a-845d-4711-838c-550bdd11fb62" isHorizontal="false">\r\n        <dc:Bounds x="696.0" y="208.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_6" bpmnElement="bpmn-91e033d1-1aa1-4da3-a609-8405451d49b7" isHorizontal="false">\r\n        <dc:Bounds x="296.0" y="104.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_7" bpmnElement="bpmn-d386ecd0-8e84-43c4-b88e-23235082602c" isHorizontal="false">\r\n        <dc:Bounds x="824.0" y="208.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_8" bpmnElement="bpmn-c93fbbec-b693-499e-b6c9-9680ddc17e32" isHorizontal="false">\r\n        <dc:Bounds x="984.0" y="216.0" height="32.0" width="32.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_9" bpmnElement="bpmn-f1b91784-04cc-43a0-9ed5-6f75cfd731eb" isHorizontal="false">\r\n        <dc:Bounds x="952.0" y="104.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_10" bpmnElement="bpmn-e48c3a6a-b5dc-4389-84ea-a7ac9eb19d6e" isHorizontal="false">\r\n        <dc:Bounds x="984.0" y="24.0" height="32.0" width="32.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_11" bpmnElement="bpmn-b61f70d3-cd6c-4dcf-8248-2b39dac5cc4f" isHorizontal="false">\r\n        <dc:Bounds x="1096.0" y="208.0" height="56.0" width="96.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_12" bpmnElement="bpmn-cefb6901-dfa7-4422-8dd0-98f6f7bd5d4c" isHorizontal="false">\r\n        <dc:Bounds x="1226.0" y="220.0" height="24.0" width="24.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_13" bpmnElement="bpmn-a0e9905b-4669-416d-a378-b80acd97fa02" isHorizontal="false">\r\n        <dc:Bounds x="48.0" y="0.0" height="192.0" width="1216.0" />\r\n      </bpmndi:BPMNShape>\r\n      <bpmndi:BPMNShape id="Shape_14" bpmnElement="bpmn-5e736a74-ed20-49fe-9a97-fa67eaffbc3b" isHorizontal="false">\r\n        <dc:Bounds x="48.0" y="192.0" height="128.0" width="1216.0" />\r\n      </bpmndi:BPMNShape>\r\n    </bpmndi:BPMNPlane>\r\n  </bpmndi:BPMNDiagram>\r\n</bpmn:definitions>',
    ScenarioName: null,
    Instances: 0,
    IsSelfDuplicated: false,
    DuplicatedProcessId: 0,
    StepReports: [],
    Heatmap: null,
    CostCalculation: null,
    IsCurrent: true,
    TagVersion: 1,
    BWLID: '',
    BWLRevisionId: '',
    PossiblePaths: 1,
    ActivityCount: 8,
    GatewayCount: 3,
}

const container = document.getElementById('canvas')
const diagramUrl = diagramData.BPMN
const modeler = new BpmnJS({
    container,
    keyboard: {
        bindTo: document,
    } ,
})

modeler
    .importXML(diagramUrl)
    .then(({ warnings }) => {
        if (warnings.length) {
            console.log(warnings)
        }

        const canvas = modeler.get('canvas')

        canvas.zoom('fit-viewport')
    })
    .catch((err) => {
        console.log(err)
    })

const eventBus = modeler.get('eventBus')

eventBus.on('import.done', function (event) {
    const { error, warnings } = event

    console.log('import done', error, warnings)
})

console.log(modeler)
