# BMI Calculator with docker and Nodejs for Happyfresh

This is a repository project to complete test assessment SRE Happyfresh on 14 Sept 2021
It will calculate your BMI (Body Mass Index) based on your height and weight input parameter that submitted through url

## Installation

Build use Nodejs 14.x

```bash
git clone https://github.com/ridersaitou/bmi-nodeapi.git
```

Modify .github\workflows\node.js.ci-build.yml and .github\workflows\node.js.cd-deploy.yml as per your environment variable, here I'm using my hosted VPS running ubuntu 20, in those VPS I already install docker and nodejs

## Usage

Open url demo:

```url
http://103.55.38.76:8888/?height=165&weight=81
```

Output type: application/json

```python
{
    "bmi": 29.752066115702483,
    "label": "Overweight"
}
```

There are 4 different parameter output:

```python
bmi <= 18.5 == "Underweight"
> 18.5 bmi <= 25 == "Healthy"
> 25 bmi <= 30 == "Overweight"
bmi >30 == "Obesity"
```

## CI/CD using github action

Github action

```python
https://github.com/ridersaitou/bmi-nodeapi/actions
```

    CI: Node.js CI workflow --> auto build and publish image to docker-hub
    CD: Node.js CD workflow --> auto pull and deploy to VPS as docker

## Docker images artifact:

```url
https://hub.docker.com/r/sentanueddy/bmi-happy-app2
```

## Monitoring

Splunk Dashboard

```url
http://103.55.38.76:8000/
```

## License

[MIT](https://opensource.org/licenses/MIT)
